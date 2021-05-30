import { Deck, Card } from "@made/entities";
import { IEditorPresenter } from "@made/use-cases";

export class ReactEditorPresenter implements IEditorPresenter {
  presentDeck(deck: Deck): void {
    throw new Error("Method not implemented.");
  }
  presentCard(card: Card): void {
    throw new Error("Method not implemented.");
  }

}