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
      mock<Card>({ name: '1', type: 'Creature — Human Wizard' }),
      mock<Card>({ name: '2', type: 'Legendary Creature — Praetor' }),
      mock<Card>({ name: '3', type: 'Creature — Snake' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures')
    expect(viewModel.typeGroups[0].cards.length).toEqual(3)
  })

  it('should group instants and sorceries as "Spells"', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: '1', type: 'Instant' }),
      mock<Card>({ name: '2', type: 'Sourcery' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Spells')
    expect(viewModel.typeGroups[0].cards.length).toEqual(2)
  })

  it('should not group different types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: '1', type: 'Sourcery' }),
      mock<Card>({ name: '2', type: 'Instant' }),
      mock<Card>({ name: '3', type: 'Creature' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Creatures')
    expect(viewModel.typeGroups[0].cards.length).toEqual(1)
    expect(viewModel.typeGroups[1].type).toEqual('Spells')
    expect(viewModel.typeGroups[1].cards.length).toEqual(2)
  })

  it('should group all lands types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: '1', type: 'Basic Land' }),
      mock<Card>({ name: '2', type: 'Land - Island Mountain' }),
      mock<Card>({ name: '3', type: 'Land Creature - Forest Dryad' })
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[1].type).toEqual('Lands')
    expect(viewModel.typeGroups[1].cards.length).toEqual(2)
  })

  it('should group all lands types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: '1', type: 'Planeswalker' }),
      mock<Card>({ name: '2', type: 'Legendary Planeswalker - Liliana' }),
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[0].type).toEqual('Planeswalkers')
    expect(viewModel.typeGroups[0].cards.length).toEqual(2)
  })

  it('should group all enchantments types togheter', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: '1', type: 'Enchantment' }),
      mock<Card>({ name: '2', type: 'Legendary Enchantment Creature - God' }),
    ]})
    presenter.presentDeck(mockDeck)
    expect(viewModel.typeGroups[1].type).toEqual('Enchantments')
    expect(viewModel.typeGroups[1].cards.length).toEqual(1)
  })

  it('should group the cards by name', () => {
    const mockDeck = mock<Deck>({ cards: [
      mock<Card>({ name: 'Island', type: 'Basic Land' }),
      mock<Card>({ name: 'Island', type: 'Basic Land' }),
      mock<Card>({ name: 'Mountain', type: 'Basic Land' }),
    ]})
    presenter.presentDeck(mockDeck)
    const lands = viewModel.typeGroups[0].cards.map(c => [c.count, c.name])
    expect(lands).toEqual([[2, 'Island'], [1, 'Mountain']])
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