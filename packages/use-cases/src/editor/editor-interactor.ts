import { IDeckRepository, IEditorPresenter } from "./editor-ports";

export class EditorInteractor {
  presenter: IEditorPresenter
  repository: IDeckRepository

  constructor(presenter: IEditorPresenter, repository: IDeckRepository) {
    this.presenter = presenter
    this.repository = repository
  }

  async showDeck(id: string) {
    const deck = await this.repository.getDeckById(id)
    return this.presenter.presentDeck(deck)
  }
}