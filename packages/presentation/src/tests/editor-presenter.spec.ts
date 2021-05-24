import { Deck } from "@made/entities"
import { mock } from "jest-mock-extended"
import { EditorViewModel, IEditorView } from "../editor/editor-ports"
import { EditorPresenter } from "../editor/editor-presenter"

describe('EditorPresenter', () => {
  it('should format the deck to the view', () => {
    const mockDeck = mock<Deck>()
    const mockView = mock<IEditorView>()
    const presenter = new EditorPresenter(mockView)
    presenter.presentDeck(mockDeck)
    expect(mockView.update).toHaveBeenCalled()
  })
})