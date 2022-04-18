import { Formats } from '@made/entities'
import { EditorPresenter, IEditorView } from '@made/presentation'
import {
  EditorInteractor,
  ICardRepository,
  IDeckRepository,
} from '@made/use-cases'

export const createEditor = (view: IEditorView) => {
  return new EditorInteractor(
    new EditorPresenter(view),
    fakeRepository,
    fakeRepository
  )
}

const fakeRepository: IDeckRepository & ICardRepository = {
  getCardById(id) {
    return Promise.resolve({
      name: 'Delver of Secrets',
      id: '123456',
      cost: 'U',
      text: 'asasas',
      type: 'Creature - Human Wizard',
    })
  },
  getDeckById(id) {
    const deck = {
      id: '1234',
      name: 'Modern UR Delver',
      format: Formats.Modern,
      cards: [
        {
          name: 'Delver of Secrets',
          id: '123456',
          cost: 'U',
          text: 'asasas',
          type: 'Creature - Human Wizard',
        },
        {
          name: 'Delver of Secrets',
          id: '123456',
          cost: 'U',
          text: 'asasas',
          type: 'Creature - Human Wizard',
        },
        {
          name: 'Delver of Secrets',
          id: '123456',
          cost: 'U',
          text: 'asasas',
          type: 'Creature - Human Wizard',
        },
        {
          name: 'Delver of Secrets',
          id: '123456',
          cost: 'U',
          text: 'asasas',
          type: 'Creature - Human Wizard',
        },
        {
          name: 'Sprite Dragon',
          id: '123456',
          cost: 'UR',
          text: 'asasas',
          type: 'Creature - Faerie Dragon',
        },
        {
          name: 'Sprite Dragon',
          id: '654321',
          cost: 'UR',
          text: 'asasas',
          type: 'Creature - Faerie Dragon',
        },
        {
          name: 'Steam Vents',
          id: '123',
          text: '{T} to add {B}',
          type: 'Land',
        },
      ],
    }
    console.log('tick')
    return Promise.resolve(deck)
  },
}
