import { useState, useCallback, ChangeEvent, useEffect } from 'react'
import { IListOption } from '../MultipleSelectionEntry.interface'

interface IUseMultipleSelectionEntry {
  listOptions: IListOption[]
  numberOfSelectable?: number
  selectedValues?: number[]
  onChange: (value: IListOption[]) => void
}

export const useMultipleSelectionEntry = ({
  selectedValues,
  listOptions,
  onChange,
  numberOfSelectable
}: IUseMultipleSelectionEntry) => {
  const [inputValue, setInputValue] = useState('')
  const [localSelectedValues, localSetSelectedValues] = useState<IListOption[]>([])
  const [localListOptions, localSetListOptions] = useState<IListOption[]>([])

  const getListOptions = useCallback(async () => {
    const options = await listOptions
    localSetListOptions(options)
  }, [listOptions])

  const getSaveOptions = useCallback(async () => {
    if (selectedValues) {
      const saveOptionsFilter = await listOptions.filter((options) => selectedValues.includes(options.id))
      localSetSelectedValues(saveOptionsFilter)
    }
  }, [selectedValues, listOptions])

  useEffect(() => {
    getListOptions()
  }, [getListOptions])

  useEffect(() => {
    getSaveOptions()
  }, [getSaveOptions])

  const addValueToArray = useCallback(
    (value: IListOption) => {
      const valueExists = localSelectedValues.some((currentValues) => currentValues.id === value.id)
      if (valueExists) return
      if (localSelectedValues.length === numberOfSelectable) return
      localSetSelectedValues((prevValues) => {
        onChange([...prevValues, value])
        return [...prevValues, value]
      })
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
      event.preventDefault()
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

  return {
    addValueToArray,
    removeValueToArray,
    handleInputChange,
    clearFilter,
    inputValue,
    localListOptions,
    localSelectedValues
  }
}
