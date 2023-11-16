import React, { useMemo } from 'react'
import { classMUI } from '@constants/stories'
import ContainerOptions from './children/ContainerOptions/ContainerOptions.component'
import { IOneSelectionentry } from './OneSelectionEntry.interface'
import { useOneSelectionEntry } from './hooks/useOneSelectionEntry'
import style from './OneSelectionEntry.module.scss'

const OneSelectionEntry: React.FC<IOneSelectionentry> = ({ dropDownTitle, listOptions, selectedValue, onChange }) => {
  const { addValue, localListOptions, localSelectedValue } = useOneSelectionEntry({
    listOptions,
    selectedValue,
    onChange
  })

  const dropDownTitleSelection = useMemo(() => {
    if (localSelectedValue) {
      return localSelectedValue.label
    }
    return dropDownTitle
  }, [dropDownTitle, localSelectedValue])

  return (
    <div className={`${style[`${classMUI}-one-selection-entry`]}`}>
      <ContainerOptions
        dropDownTitle={dropDownTitleSelection}
        addValue={addValue}
        listOptions={localListOptions}
        selectedValue={localSelectedValue}
      />
    </div>
  )
}

export default OneSelectionEntry
