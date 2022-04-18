import { useListKeyboardHandler } from 'hooks/useListKeyboardHandler'
import React from 'react'
import { FC, MouseEvent } from 'react'

export type IndexPath = {
  section: number
  row: number
}

export type ListSectionViewModel = {
  label: string
  rows: ReadonlyArray<string>
}

export type ListProps = {
  sections: ReadonlyArray<ListSectionViewModel>
  selectedIndexPath: IndexPath
  onChange: (indexPath: IndexPath) => void
}

export const List: FC<ListProps> = ({
  sections,
  selectedIndexPath,
  onChange,
}) => {
  const { onKeyDown } = useListKeyboardHandler({
    selectedIndexPath,
    sections,
    onChange,
  })

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const section = parseInt(e.currentTarget.dataset.section)
    const row = parseInt(e.currentTarget.dataset.row)
    onChange({ section, row })
  }

  return (
    <ul
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="select-none focus:outline-none w-full"
    >
      {sections.map(({ label, rows }, section) => (
        <React.Fragment key={label}>
          <li className="px-2 py-1 font-semibold">{label}</li>
          {rows.map((text, row) => {
            const isSelected =
              selectedIndexPath?.section == section &&
              selectedIndexPath?.row == row
            return (
              <li
                key={`${section}${row}`}
                onClick={onClick}
                data-section={section}
                data-row={row}
                className={`px-2 py-1 rounded ${
                  isSelected ? 'bg-gray-200 dark:bg-gray-600' : ''
                }`}
              >
                {text}
              </li>
            )
          })}
        </React.Fragment>
      ))}
    </ul>
  )
}
