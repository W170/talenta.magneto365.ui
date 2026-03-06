import { useState, useEffect, useCallback, ChangeEvent, useMemo } from 'react'
import { ISelectField, ISelectHook, ISelectOptions } from './Select2.interface'
import { normalizeString } from '@utils/string/normalizeString.util'

const useSelect2 = <T>({
  setTerm,
  currentFields = [],
  limitSelections,
  setClickOut = () => ({}),
  onChange,
  isMultiple,
  selectList
}: Pick<
  ISelectOptions<T>,
  'setClickOut' | 'setTerm' | 'currentFields' | 'isMultiple' | 'selectList' | 'onChange' | 'limitSelections'
>): ISelectHook<T> => {
  const [valueSelected, setValueSelected] = useState<(ISelectField & T)[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [disableList, setDisableList] = useState(false)

  useEffect(() => {
    if (setTerm && searchValue.length) {
      setTerm(searchValue)
    }
  }, [searchValue, setTerm])

  useEffect(() => {
    if (!currentFields) {
      if (valueSelected.length !== 0) {
        setValueSelected([])
      }
      return
    }

    if (!Array.isArray(currentFields)) {
      if ('id' in currentFields && 'name' in currentFields) {
        const newValue = [currentFields]
        if (JSON.stringify(valueSelected) !== JSON.stringify(newValue)) {
          setValueSelected(newValue)
        }
      }
      return
    }

    if (currentFields.length === 0) {
      if (valueSelected.length !== 0) {
        setValueSelected([])
      }
      return
    }

    setValueSelected((prev) => {
      if (currentFields.map((field) => field.id).join() === prev.map((p) => p.id).join()) {
        return prev
      }
      return currentFields
    })
  }, [currentFields, valueSelected])

  useEffect(() => {
    if (limitSelections && valueSelected.length >= limitSelections) {
      setDisableList(true)
      setClickOut(false)
      return
    }
    setDisableList(false)
  }, [limitSelections, setClickOut, valueSelected.length])

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }, [])

  const list = useMemo(() => {
    const normalizedSearch = normalizeString(searchValue.toLowerCase())
    if (normalizedSearch.length > 1 && !setTerm) {
      return selectList.filter(({ name }) => normalizeString(name.toLowerCase()).includes(normalizedSearch))
    }

    return selectList
  }, [searchValue, selectList, setTerm])

  const handleSelected = (value: (ISelectField & T)[] | ((prev: (ISelectField & T)[]) => (ISelectField & T)[])) => {
    if (Array.isArray(value)) {
      setValueSelected(value)
      onChange(value)
      return
    }

    setValueSelected((prev) => {
      const result = value(prev)
      onChange(result)
      return result
    })
  }

  const handleChange = (selectedValue: ISelectField & T) => {
    setClickOut(false)
    setSearchValue('')
    if (isMultiple) {
      handleSelected((prev) => [...prev, selectedValue])
      return
    }
    handleSelected([selectedValue])
  }

  const removeValue = (id: string | number) => {
    handleSelected((prev) => prev.filter((p) => p.id !== id))
  }

  return { list, removeValue, handleChange, disableList, handleSearch, searchValue, valueSelected }
}

export default useSelect2
