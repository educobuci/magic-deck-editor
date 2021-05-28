import React from "react"
import { FC, useState, MouseEvent } from "react"

export type IndexPath = {
  section: number
  row: number
}

export type ListSectionViewModel = {
  label: string
  rows: ReadonlyArray<string>
}

export type ListViewModel = { sections: ReadonlyArray<ListSectionViewModel> }

export const List: FC<ListViewModel> = ({ sections }) => {
  const [selectedIndexPath, setSelectedIndexPath] = useState<IndexPath>({ section: -1, row: -1 })
  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const section = parseInt(e.currentTarget.dataset.section)
    const row = parseInt(e.currentTarget.dataset.row)
    setSelectedIndexPath({ section, row})
  }
  return <ul className="select-none">
    { sections.map(({ label, rows }, section) => (
      <React.Fragment key={ label }>
        <li className="px-2 py-1 font-semibold" >{ label }</li>
        { rows.map((text, row) => {
          const isSelected = selectedIndexPath.section == section && selectedIndexPath.row == row
          return <li key={`${section}${row}`}
            onClick={onClick}
            data-section={section}
            data-row={row}
            className={`px-2 py-1 rounded ${ isSelected ? 'bg-gray-600': '' }`}>
            { text }
          </li>
        })}
      </React.Fragment>
    ))}
  </ul>
}