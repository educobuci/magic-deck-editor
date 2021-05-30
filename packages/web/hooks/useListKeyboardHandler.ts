import { IndexPath, ListSectionViewModel } from "components/list"
import { KeyboardEvent } from "react"

export type ListKeyboardHandlerProps = {
  selectedIndexPath: IndexPath,
  sections: ReadonlyArray<ListSectionViewModel>
  setSelectedIndexPath: (indexPath: IndexPath) => void
}

export function useListKeyboardHandler({selectedIndexPath, sections, setSelectedIndexPath }: ListKeyboardHandlerProps) {
  const onKeyDown = (e: KeyboardEvent) => {
    const { section, row } = selectedIndexPath
    switch(e.key) {
      case 'ArrowUp':
        if(row > 0) {
          setSelectedIndexPath({ section, row: row - 1 })
        } else if(section > 0) {
          const newSection = section - 1
          const newRow = sections[newSection].rows.length -1
          setSelectedIndexPath({ section: newSection, row: newRow })
        }
        break
      case 'ArrowDown':
        if(row < sections[section].rows.length - 1) {
          setSelectedIndexPath({ section, row: row + 1 })
        } else if(section < sections.length - 1) {
          const newSection = section + 1
          const newRow = 0
          setSelectedIndexPath({ section: newSection, row: newRow })
        }
        break
    }
  }
  return { onKeyDown }
}