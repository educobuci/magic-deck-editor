import { Card } from '@made/entities'
import { EditorViewModel } from '@made/presentation'
import { createEditor } from 'common/factory'
import { IndexPath, List } from 'components/list'
import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function EditorPage() {
  const [selectedIndexPath, setSelectedIndexPath] = useState(null)
  const [viewModel, setViewModel] = useState<EditorViewModel>(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState(null)
  const [detailsCard, setDetailsCard] = useState<Card>(null)

  const interactor = useRef(
    createEditor({
      update: (viewModel) => {
        setName(viewModel.deckName)
        setViewModel(viewModel)
      },
    })
  )

  const list = useMemo(
    () =>
      viewModel?.typeGroups.map((typeGroup) => ({
        label: typeGroup.type,
        rows: typeGroup.cards.map(
          ({ count, name, cost }) => `${count} ${name} ${cost}`
        ),
      })),
    [viewModel]
  )

  const selectDeckCard = (indexPath: IndexPath) => {
    setSelectedIndexPath(indexPath)
    // setDetailsCard(viewModel.typeGroups[indexPath.section].cards[indexPath.row])
  }

  useEffect(() => {
    interactor.current.showDeck('123').then(() => setLoading(false))
  }, [])

  return (
    <div className="p-4 min-h-screen grid grid-cols-3 gap-4 dark:bg-gray-800 dark:text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="rounded border border-gray-500 p-4"></div>
          <div className="rounded border border-gray-500 p-4"></div>
          <div className="rounded border border-gray-500 p-4">
            <input
              className="w-full rounded bg-transparent border border-gray-500"
              type="text"
              readOnly
              value={name}
            />
            <List
              sections={list}
              selectedIndexPath={selectedIndexPath}
              onChange={(i) => selectDeckCard(i)}
            />
          </div>
        </>
      )}
    </div>
  )
}
