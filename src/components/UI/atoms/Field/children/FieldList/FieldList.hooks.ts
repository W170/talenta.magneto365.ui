import { useState, useCallback, useMemo } from 'react'
import { IFieldList, FieldListValue } from './FieldList.interface'
import { useFieldContext } from '../../Field.context'

export function useFieldList<T extends FieldListValue>({
  defaultValue,
  multiple,
  onChange,
  value: controlledValue
}: Omit<IFieldList<T>, 'children'>) {
  const [selected, setSelected] = useState<T[] | T | undefined | null>(defaultValue)
  const { setIsFocused } = useFieldContext()

  const isControlled = useMemo(() => controlledValue !== undefined, [controlledValue])

  const value = useMemo(() => (isControlled ? controlledValue : selected), [isControlled, controlledValue, selected])

  const handleMultipleChange = useCallback(
    (newValue: T[]) => {
      if (!onChange) return
      const multipleOnChange = onChange as (value?: T[]) => void
      multipleOnChange(newValue)
    },
    [onChange]
  )

  const handleSingleChange = useCallback(
    (newValue?: T | null) => {
      if (!onChange) return
      const singleOnChange = onChange as (value?: T | null) => void
      singleOnChange(newValue)
    },
    [onChange]
  )

  const toggleValue = useCallback(
    (value?: FieldListValue) => {
      if (!value) return

      if (multiple) {
        const prevArr = ((isControlled ? controlledValue : selected) as T[]) ?? []
        const exists = prevArr.some((v) => v.id === value.id)
        const next = exists ? prevArr.filter((v) => v.id !== (value as T).id) : [...prevArr, value as T]
        handleMultipleChange(next)
        if (!isControlled) setSelected(next)
      } else {
        const finalValue = (controlledValue as T)?.id === value.id ? undefined : (value as T)
        setIsFocused(false)
        handleSingleChange(finalValue)
        if (!isControlled) setSelected(finalValue)
      }
    },
    [controlledValue, isControlled, multiple, handleMultipleChange, handleSingleChange, selected, setIsFocused]
  )

  return { toggleValue, value }
}
