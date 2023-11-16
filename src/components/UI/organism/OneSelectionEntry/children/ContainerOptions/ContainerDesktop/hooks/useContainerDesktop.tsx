import { useEffect, useRef, useState } from 'react'

interface IUseContainerDesktop {
  addValue: (value: number) => void
}

const useContainerDesktop = ({ addValue }: IUseContainerDesktop) => {
  const containerOptions = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 0 })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const input = inputRef.current

    if (input) {
      const rect = input.getBoundingClientRect()

      setMenuPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      })
    }
  }, [isOpen])

  useEffect(() => {
    const handleMouseOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mouseover', handleMouseOutside)

    return () => {
      document.removeEventListener('mouseover', handleMouseOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const selectValue = (value: number) => {
    addValue(value)
    setIsOpen(!isOpen)
  }

  return {
    toggleDropdown,
    containerOptions,
    menuPosition,
    inputRef,
    isOpen,
    dropdownRef,
    selectValue
  }
}

export default useContainerDesktop
