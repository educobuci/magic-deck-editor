import { Card, Deck } from "@made/entities";

export interface IEditorPresenter {
  presentDeck(deck: Deck): void
  presentCard(card: Card): void
}

export interface IDeckRepository  {
  getDeckById(id: string): Promise<Deck>
}

export interface ICardRepository {
  getCardById(id: string): Promise<Card>
}