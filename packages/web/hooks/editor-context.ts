import { Formats } from "@made/entities"
import { EditorInteractor, IDeckRepository, ICardRepository } from "@made/use-cases"
import { EditorPresenter, IEditorView } from "@made/presentation"
import { ListViewModel } from "components/list"
import { useState, useEffect, createContext } from "react"

export interface IEditorContext {
  name: string
  listViewModel?: ListViewModel
  loading: boolean
}

export const EditorContext = createContext<IEditorContext>({ loading: true, name: '' })

export const EditorContextProvider = (): IEditorContext => {
  const [listViewModel, setListViewModel] = useState<ListViewModel>()
  const [loading, setLoading] = useState(true)
  const editorViewAdapter: IEditorView = {
    update(viewModel) {
      setListViewModel({
        sections: viewModel.typeGroups.map(typeGroup => ({
          label: typeGroup.type,
          rows: typeGroup.cards.map(({ count, name, cost }) => `${count} ${name} ${cost}`)
        }))
      })
    }
  }
  const presenter = new EditorPresenter(editorViewAdapter)
  const interactor = new EditorInteractor(presenter, fakeRepository, fakeRepository)
  useEffect(() => {
    interactor.showDeck('1234').then(() => setLoading(false))
  }, [])
  return {
    name: 'UR Modern Delver',
    listViewModel,
    loading,
  }
}

const fakeRepository: IDeckRepository & ICardRepository = {
  getCardById(id) {
    return Promise.resolve({ name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' })
  },
  getDeckById(id) {
    const deck = {
      id: '1234',
      name: 'Modern UR Delver',
      format: Formats.Modern,
      cards: [
        { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        { name: 'Sprite Dragon', id: '123456', cost: 'UR', text: 'asasas', type: 'Creature - Faerie Dragon' },
        { name: 'Sprite Dragon', id: '654321', cost: 'UR', text: 'asasas', type: 'Creature - Faerie Dragon' },
        { name: 'Steam Vents', id: '123', text: '{T} to add {B}', type: 'Land' }
      ]
    }
    console.log('tick')
    return new Promise(res => setTimeout(() => res(deck), 1000))
  }
}