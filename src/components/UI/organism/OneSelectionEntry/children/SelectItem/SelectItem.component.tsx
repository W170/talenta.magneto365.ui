import React, { useMemo } from 'react'
import { ISelectItem } from './SelectItem.interface'
import { classMUI } from '@constants/stories'
import style from './SelectItem.module.scss'

const SelectItem: React.FC<ISelectItem> = ({ text, onClick, disable, selected }) => {
  const disableSelection = useMemo(() => {
    return disable ? style['disable'] : ''
  }, [disable])

  const selectedSelection = useMemo(() => {
    return selected ? style['selected'] : ''
  }, [selected])

  return (
    <button
      className={`${style[`${classMUI}-select-item`]} ${disableSelection} ${selectedSelection}`}
      title={text}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SelectItem
