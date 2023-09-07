import { useCallback, useEffect, useState } from 'react'

export const useKeyboard = (field: string, size: number, cleanSearch: () => void): number[] => {
  const [keyboardIndex, setKeyboardIndex] = useState(-1)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && keyboardIndex < size - 1) {
        return setKeyboardIndex(keyboardIndex + 1)
      }
      if (e.key === 'ArrowUp' && keyboardIndex > 0) {
        return setKeyboardIndex(keyboardIndex - 1)
      }
      if (e.key === 'Enter' && keyboardIndex >= 0) {
        const selectedOption = document.getElementById(`${field}-menu-item-${keyboardIndex}`)
        selectedOption?.click()
        cleanSearch()
      }
      setKeyboardIndex(-1)
    },
    [field, size, keyboardIndex, cleanSearch]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardIndex, size])

  return [keyboardIndex]
}
