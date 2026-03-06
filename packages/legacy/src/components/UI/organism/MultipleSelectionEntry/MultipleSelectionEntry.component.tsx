import React from 'react'

import { classMUI } from '@constants/stories'
import style from './MultipleSelectionEntry.module.scss'
import ContainerOptions from './children/ContainerOptions/ContainerOptions.component'
import { IMultipleSelectionentry } from './MultipleSelectionEntry.interface'
import { useMultipleSelectionEntry } from './hooks/useMultipleSelectionEntry'

const MultipleSelectionEntry: React.FC<IMultipleSelectionentry> = ({
  dropDownTitle,
  placeholder,
  listOptions,
  selectedValues,
  numberOfSelectable = 3,
  onChange
}) => {
  const {
    addValueToArray,
    clearFilter,
    handleInputChange,
    inputValue,
    localListOptions,
    removeValueToArray,
    localSelectedValues
  } = useMultipleSelectionEntry({ listOptions, selectedValues, onChange, numberOfSelectable })

  const inputSearchProps = {
    placeholder,
    closeOnClick: clearFilter,
    inputValue,
    onChange: handleInputChange
  }
  return (
    <div className={`${style[`${classMUI}-multiple-selection-entry`]}`}>
      <ContainerOptions
        removeValueToArray={removeValueToArray}
        dropDownTitle={dropDownTitle}
        numberOfSelectable={numberOfSelectable}
        inputSearchProps={inputSearchProps}
        addValueToArray={addValueToArray}
        listOptions={localListOptions}
        selectedValues={localSelectedValues}
      />
    </div>
  )
}

export default MultipleSelectionEntry
