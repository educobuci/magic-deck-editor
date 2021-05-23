import { Deck } from "@made/entities";

export interface IEditorPresenter {
  presentDeck(deck: Deck): void
}

export interface IDeckRepository  {
  getDeckById(id: string): Promise<Deck>
}