import { Card, Deck } from '@made/entities'
import { mock } from 'jest-mock-extended'
import { EditorPresenter, EditorViewModel, IEditorView } from '../src'

describe('EditorPresenter', () => {
  it('should format the deck data to the view', () => {
    const mockDeck = mock<Deck>({ cards: [] }) 
    presenter.presentDeck(mockDeck)
    expect(viewModel.deckName).toEqual(mockDeck.name)
  })

  it('should group all creatures types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Creature — Human Wizard' }),
      mock<Card>({ type: 'Legendary Creature — Praetor' }),
      mock<Card>({ type: 'Creature — Snake' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures')
    expect(viewModel.typeGroups[0].cards.length).toEqual(3)
  })

  it('should group instants and sorceries as "Spells"', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Instant' }),
      mock<Card>({ type: 'Sourcery' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Spells')
    expect(viewModel.typeGroups[0].cards.length).toEqual(2)
  })

  it('should not group different types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Sourcery' }),
      mock<Card>({ type: 'Instant' }),
      mock<Card>({ type: 'Creature' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures')
    expect(viewModel.typeGroups[0].cards.length).toEqual(1)
    expect(viewModel.typeGroups[1].type).toEqual('Spells')
    expect(viewModel.typeGroups[1].cards.length).toEqual(2)
  })

  it('should group all lands types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Basic Land' }),
      mock<Card>({ type: 'Land - Island Mountain' }),
      mock<Card>({ type: 'Land Creature - Forest Dryad' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[1].type).toEqual('Lands')
    expect(viewModel.typeGroups[1].cards.length).toEqual(2)
  })

  it('should group all lands types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Planeswalker' }),
      mock<Card>({ type: 'Legendary Planeswalker - Liliana' }),
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Planeswalkers')
    expect(viewModel.typeGroups[0].cards.length).toEqual(2)
  })

  it('should group all enchantments types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ type: 'Enchantment' }),
      mock<Card>({ type: 'Legendary Enchantment Creature - God' }),
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[1].type).toEqual('Enchantments')
    expect(viewModel.typeGroups[1].cards.length).toEqual(1)
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