export type EditorViewModel = {
  deckName: string
  typeGroups: {
    type: string,
    cards: {
      name: string,
      count: number,
      cost?: string,
    }[]
  }[]
}

export interface IEditorView {
  update(editorViewModel: EditorViewModel): void
}