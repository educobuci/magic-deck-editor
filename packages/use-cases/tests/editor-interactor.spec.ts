import { Deck } from '@made/entities'
import { IEditorPresenter, EditorInteractor, IDeckRepository } from '@made/use-cases'
import { mock } from 'jest-mock-extended'

describe('EditorInteractor', () => {
  it('should show a deck', async () => {
    const mockDeck = mock<Deck>()
    const mockPresenter = mock<IEditorPresenter>()
    const mockRepository = mock<IDeckRepository>()
    mockRepository.getDeckById.calledWith('1234').mockResolvedValueOnce(mockDeck)
    const editorInteractor = new EditorInteractor(mockPresenter, mockRepository)
    await editorInteractor.showDeck('1234')
    expect(mockPresenter.presentDeck).toHaveBeenCalledWith(mockDeck)
  })
})

export {}