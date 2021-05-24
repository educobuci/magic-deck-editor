export type ListViewModelSection = {
  label: string
  items: ReadonlyArray<string>
}

export type ListViewModel = {
  sections: ReadonlyArray<ListViewModelSection>
}

export type EditorViewModel = {
  name: string
  editorListViewModel: ListViewModel
}

export interface IEditorView {
  update(viewModel: EditorViewModel): Promise<void>
}