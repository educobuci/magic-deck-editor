import { Formats } from "@made/entities"
import { IEditorPresenter, EditorInteractor, IDeckRepository, ICardRepository } from "@made/use-cases"
import { IndexPath, ListViewModel } from "components/list"
import { useState, useEffect, createContext } from "react"

export interface IEditorContext {
  name: string
  listViewModel?: ListViewModel
  loading: boolean
  keyDown?(event: KeyboardEvent): void
  click?(indexPath: IndexPath): void
}

export const EditorContext = createContext<IEditorContext>({ loading: true, name: '' })

export const EditorContextProvider = (): IEditorContext => {
  const [listViewModel, setListViewModel] = useState<ListViewModel>()
  const [loading, setLoading] = useState(true)
  const presenter: IEditorPresenter = {
    presentDeck(deck) {
      setListViewModel({ sections: [{ label: 'Creatures', rows: deck.cards.map(c => c.name)}] })
    },
    presentCard(card) { }
  }
  const interactor = new EditorInteractor(presenter, fakeRepository, fakeRepository)
  
  useEffect(() => {
    interactor.showDeck('1234').then(() => setLoading(false))
  }, [])
  
  return {
    name: 'UR Modern Delver',
    listViewModel,
    loading,
    click(indexPath) {
    },
    keyDown(e) {
      switch(e.key) {
        case 'ArrowUp':
          console.log('up')
          break
        case 'ArrowDown':
          console.log('down')
          break
      }
    }
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
        // { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        // { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        // { name: 'Delver of Secrets', id: '123456', cost: 'U', text: 'asasas', type: 'Creature - Human Wizard' },
        // { name: 'Sprite Dragon', id: '123456', cost: 'UR', text: 'asasas', type: 'Creature - Faerie Dragon' },
        { name: 'Sprite Dragon', id: '654321', cost: 'UR', text: 'asasas', type: 'Creature - Faerie Dragon' },
      ]
    }
    console.log('tick')
    return new Promise(res => setTimeout(() => res(deck), 1000))
  }
}