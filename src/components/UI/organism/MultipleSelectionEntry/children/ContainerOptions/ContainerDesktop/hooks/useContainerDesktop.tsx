import { IListOption } from '@components/UI/organism/MultipleSelectionEntry/MultipleSelectionEntry.interface'
import { useEffect, useMemo, useRef, useState } from 'react'

interface IUseContainerDesktop {
  numberOfSelectable: number
  selectedValues: IListOption[]
}

const useContainerDesktop = ({ numberOfSelectable, selectedValues }: IUseContainerDesktop) => {
  const limitOfSelectable = useMemo(() => {
    return selectedValues.length < numberOfSelectable
  }, [numberOfSelectable, selectedValues.length])

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
  }, [isOpen, selectedValues])

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

  useEffect(() => {
    if (!limitOfSelectable) {
      setIsOpen(false)
    }
  }, [limitOfSelectable])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return {
    toggleDropdown,
    containerOptions,
    menuPosition,
    limitOfSelectable,
    inputRef,
    isOpen,
    dropdownRef
  }
}

export default useContainerDesktop
