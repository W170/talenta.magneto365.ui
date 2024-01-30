import { useState, useCallback, ChangeEvent, useEffect } from 'react'
import { IListOption } from '../OneSelectionEntry.interface'

interface IUseMultipleSelectionEntry {
  listOptions: IListOption[]
  selectedValue?: number | null
  onChange: (value: number) => void
}

export const useOneSelectionEntry = ({ selectedValue, listOptions, onChange }: IUseMultipleSelectionEntry) => {
  const [localSelectedValue, localSetSelectedValue] = useState<IListOption>()
  const [localListOptions, localSetListOptions] = useState<IListOption[]>([])

  const getListOptions = useCallback(async () => {
    const options = await listOptions
    localSetListOptions(options)
  }, [listOptions])

  const getSaveOptions = useCallback(async () => {
    if (selectedValue) {
      const saveOptionsFilter = await listOptions.filter((options) => options.id === selectedValue)
      localSetSelectedValue(saveOptionsFilter[0])
    }
  }, [selectedValue, listOptions])

  useEffect(() => {
    getListOptions()
  }, [getListOptions])

  useEffect(() => {
    getSaveOptions()
  }, [getSaveOptions])

  const addValue = useCallback(
    (value: number) => {
      const selectedValue = listOptions.filter((options) => options.id === value)
      localSetSelectedValue(selectedValue[0])
      onChange(value)
    },
    [onChange, listOptions]
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const value = event.target.value
      const filtered = listOptions.filter((option) =>
        option.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
      localSetListOptions(filtered)
    },
    [listOptions]
  )

  const clearFilter = () => {
    localSetListOptions(listOptions)
  }

  return {
    addValue,
    handleInputChange,
    clearFilter,
    localListOptions,
    localSelectedValue
  }
}
