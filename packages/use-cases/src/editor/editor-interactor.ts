import { ICardRepository, IDeckRepository, IEditorPresenter } from "./editor-ports";

export class EditorInteractor {
  presenter: IEditorPresenter
  deckRepository: IDeckRepository
  cardRepository: ICardRepository
  

  constructor(presenter: IEditorPresenter, deckRepository: IDeckRepository, cardRepository: ICardRepository) {
    this.presenter = presenter
    this.deckRepository = deckRepository
    this.cardRepository = cardRepository
  }

  async showDeck(id: string) {
    const deck = await this.deckRepository.getDeckById(id)
    return this.presenter.presentDeck(deck)
  }

  async showCardDetails(id: string) {
    const card = await this.cardRepository.getCardById(id)
    return this.presenter.presentCard(card)
  }
}