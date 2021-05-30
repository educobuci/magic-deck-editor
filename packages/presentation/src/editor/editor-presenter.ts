import { Deck, Card } from "@made/entities"
import { IEditorPresenter } from "@made/use-cases"
import { EditorViewModel, IEditorView } from "./ports"

export class EditorPresenter implements IEditorPresenter {
  editorView: IEditorView

  constructor(editorView: IEditorView) {
    this.editorView = editorView
  }

  presentDeck(deck: Deck): void {
    const creatures = deck.cards.filter(c => c.type.match(/Creature/))
    const viewModel: EditorViewModel = {
      typeGroups: [
        { type: `Creatures (${creatures.length})`, cards: creatures }
      ]
    }
    this.editorView.update(viewModel)
  }

  presentCard(card: Card): void {
    throw new Error("Method not implemented.")
  }

}