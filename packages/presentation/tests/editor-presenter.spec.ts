import { Card, Deck } from '@made/entities'
import { mock } from 'jest-mock-extended'
import { EditorPresenter, EditorViewModel, IEditorView } from '../src'

describe('EditorPresenter', () => {
  it('should format the deck data to the view', () => {
    const mockView = mock<IEditorView>()
    const mockDeck = mock<Deck>({ cards: [] }) 
    const presenter = new EditorPresenter(mockView)
    presenter.presentDeck(mockDeck)
    expect(mockView.update).toHaveBeenCalled()
  })

  it('should group all creatures types in one', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Creature — Human Wizard' }),
      mock<Card>({ type: 'Legendary Creature — Praetor' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures (2)')
  })

  it('should group all creatures types in one', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Creature — Human Wizard' }),
      mock<Card>({ type: 'Legendary Creature — Praetor' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures (2)')
  })

  beforeEach(() => {
    stubView = {
      update(editorViewModel) {
        viewModel = editorViewModel
      }
    }
    presenter = new EditorPresenter(stubView)
  })
})

var viewModel: EditorViewModel
var stubView: IEditorView
var presenter: EditorPresenter

export {}