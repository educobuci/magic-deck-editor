import { Deck } from "@made/entities";
import { IEditorPresenter } from "@made/use-cases";
import { IEditorView } from "./editor-ports";

export class EditorPresenter implements IEditorPresenter {
  view: IEditorView

  constructor(view: IEditorView) {
    this.view = view
  }
  
  presentDeck(deck: Deck): void {
    this.view.update({ name: '', editorListViewModel: { sections: [] } })
  }
}