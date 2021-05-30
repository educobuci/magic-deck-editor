import { Deck, Card } from "@made/entities"
import { IEditorPresenter } from "@made/use-cases"
import { EditorViewModel, IEditorView } from "./ports"

const GroupingCriteria: { type: string, matcher: RegExp }[] = [
  { type: 'Creatures', matcher: /Creature/ },
  { type: 'Planeswalkers', matcher: /Planeswalker/ },
  { type: 'Enchantments', matcher: /Enchantment/ },
  { type: 'Spells', matcher: /Instant|Sourcery/ },
  { type: 'Lands', matcher: /Land/ }
]

type CardTypeGroup = { type: string, cards: { name: string, cost?: string }[] }

export class EditorPresenter implements IEditorPresenter {
  editorView: IEditorView
  
  constructor(editorView: IEditorView) {
    this.editorView = editorView
  }

  presentDeck(deck: Deck): void {
    const viewModel: EditorViewModel = {
      deckName: deck.name,
      typeGroups: this.getGroups(deck.cards)
    }
    this.editorView.update(viewModel)
  }

  getGroups(cards:  ReadonlyArray<Card>): CardTypeGroup[] {
    const indexedGroups = cards.reduce<Record<string, Card[]>>((acc, card) => {
      for(const criteria of GroupingCriteria) {
        if(card.type.match(criteria.matcher)) {
          acc[criteria.type] = acc[criteria.type] ? [...acc[criteria.type], card] : [card]
          break
        }
      }
      return acc
    }, {})
    const groupOrder = GroupingCriteria.reduce((acc, { type }, order) => {
      acc[type] = order
      return acc
    }, {})
    return Object.entries(indexedGroups)
      .map(([type, cards]) => ({ type, cards }))
      .sort((a, b) => groupOrder[a.type] - groupOrder[b.type])
  }

  presentCard(card: Card): void {
    throw new Error("Method not implemented.")
  }
}
