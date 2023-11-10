import React, { useState, ChangeEvent, useEffect, useCallback } from 'react'

import { classMUI } from '@constants/stories'
import style from './MultipleSelectionEntry.module.scss'
import ContainerOptions from './children/ContainerOptions/ContainerOptions.component'
import { withClickOut } from '@components/hoc'
import { IListOption, IMultipleSelectionentry } from './MultipleSelectionEntry.interface'

const MultipleSelectionEntry: React.FC<IMultipleSelectionentry> = ({
  dropDownTitle,
  placeholder,
  listOptions,
  selectedValues,
  numberOfSelectable = 3,
  onChange
}) => {
  const [inputValue, setInputValue] = useState('')
  const [localSelectedValues, localSetSelectedValues] = useState<IListOption[]>(selectedValues || [])
  const [localListOptions, localSetListOptions] = useState<IListOption[]>(listOptions)

  useEffect(() => {
    if (selectedValues) onChange(selectedValues)
  }, [onChange, selectedValues])

  const addValueToArray = useCallback(
    (value: IListOption) => {
      const valueExists = localSelectedValues.some((currentValues) => currentValues.id === value.id)
      if (valueExists) return
      if (localSelectedValues.length === numberOfSelectable) return
      localSetSelectedValues((prevValues) => [...prevValues, value])
      onChange([...localSelectedValues, value])
    },
    [localSelectedValues, numberOfSelectable, onChange]
  )

  const removeValueToArray = useCallback(
    (value: IListOption) => {
      const filterOptions = localSelectedValues.filter((options) => options.id !== value.id)
      localSetSelectedValues(filterOptions)
      onChange(filterOptions)
    },
    [localSelectedValues, onChange]
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setInputValue(value)
      const filtered = listOptions.filter((option) =>
        option.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
      localSetListOptions(filtered)
    },
    [listOptions]
  )

  const clearFilter = () => {
    localSetListOptions(listOptions)
    setInputValue('')
  }

  const inputSearchProps = {
    placeholder,
    closeOnClick: clearFilter,
    inputValue,
    onChange: handleInputChange
  }

  return (
    <div className={`${style[`${classMUI}-multiple-selection-entry`]}`}>
      <ContainerOptions
        dropDownTitle={dropDownTitle}
        numberOfSelectable={numberOfSelectable}
        inputSearchProps={inputSearchProps}
        addValueToArray={addValueToArray}
        listOptions={localListOptions}
        removeValueToArray={removeValueToArray}
        selectedValues={localSelectedValues}
      />
    </div>
  )
}

export default withClickOut(MultipleSelectionEntry)
