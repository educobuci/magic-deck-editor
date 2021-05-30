import { List } from 'components/list'
import React, { useContext } from 'react'
import { EditorContext } from '../../hooks/editor-context'

export default function EditorPage() {
  const { listViewModel, name, loading, keyDown } = useContext(EditorContext)
  const onKeyDown = (e) => {
    keyDown(e)
  }
  return (
    <div className="p-4 min-h-screen grid grid-cols-3 gap-4 dark:bg-gray-800 dark:text-white">
      { loading ? (<div>Loading...</div>) : 
      (<>
        <div className="rounded border border-gray-500 p-4"></div>
        <div className="rounded border border-gray-500 p-4"></div>
        <div className="rounded border border-gray-500 p-4">
          <input className="w-full rounded bg-transparent border border-gray-500" type="text" readOnly value={ name } />
          <List sections={ listViewModel.sections } />
        </div>
      </>)}
    </div>
  )
}