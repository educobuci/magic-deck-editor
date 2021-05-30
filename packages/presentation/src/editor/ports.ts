export type EditorViewModel = {
  deckName: string
  typeGroups: {
    type: string,
    cards: {
      name: string,
      cost?: string
    }[]
  }[]
}

export interface IEditorView {
  update(editorViewModel: EditorViewModel): void
}