import { useState, useEffect, useCallback, ChangeEvent, useMemo } from 'react'
import { ISelectField, ISelectOptions } from './Select2.interface'

const useSelect2 = ({
  setTerm,
  currentFields,
  limitSelections,
  setClickOut = () => ({}),
  onChange,
  isMultiple,
  selectList
}: Pick<
  ISelectOptions,
  'setClickOut' | 'setTerm' | 'currentFields' | 'isMultiple' | 'selectList' | 'onChange' | 'limitSelections'
>) => {
  const [valueSelected, setValueSelected] = useState<ISelectField[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [disableList, setDisableList] = useState(false)

  useEffect(() => {
    if (setTerm && searchValue.length) {
      setTerm(searchValue)
    }
  }, [searchValue, setTerm])

  useEffect(() => {
    if (currentFields) {
      if (currentFields?.length > 0) {
        setValueSelected(currentFields)
      }
    }
  }, [currentFields])

  useEffect(() => {
    if (limitSelections && valueSelected.length >= limitSelections) {
      setDisableList(true)
      setClickOut(false)
      return
    }
    setDisableList(false)
  }, [limitSelections, setClickOut, valueSelected.length])

  useEffect(() => {
    onChange(valueSelected)
  }, [onChange, valueSelected])

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }, [])

  const list = useMemo(() => {
    if (searchValue.length > 1 && !setTerm) {
      return selectList.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return selectList
  }, [searchValue, selectList, setTerm])

  const handleChange = useCallback(
    (selectedValue: ISelectField) => {
      if (isMultiple) {
        setValueSelected((prev) => [...prev, selectedValue])
        return
      }
      setClickOut(false)
      setSearchValue('')
      setValueSelected([selectedValue])
    },
    [isMultiple, setClickOut]
  )

  const removeValue = useCallback((id: string | number) => {
    setValueSelected((prev) => prev.filter((p) => p.id !== id))
  }, [])
  return { list, removeValue, handleChange, disableList, handleSearch, searchValue, valueSelected }
}

export default useSelect2
