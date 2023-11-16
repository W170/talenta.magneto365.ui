import React from 'react'
import ReactDOM from 'react-dom'
import { SelectItem } from '../../SelectItem'
import { classMUI } from '@constants/stories'
import { IContainerOptions } from '../ContainerOptions.interface'
import { DropDownButton } from '../../DropDownButton'
import style from './ContainerDesktop.module.scss'
import { useContainerDesktop } from './hooks'

const ContainerDesktop: React.FC<IContainerOptions> = ({ listOptions, addValue, dropDownTitle, selectedValue }) => {
  const { containerOptions, menuPosition, toggleDropdown, isOpen, dropdownRef, inputRef, selectValue } =
    useContainerDesktop({ addValue })

  return (
    <div style={{ zIndex: 999999 }}>
      <div ref={inputRef}>
        <DropDownButton title={dropDownTitle} onClick={toggleDropdown} />
      </div>
      <div ref={containerOptions} className={`${style[`${classMUI}-container-options`]}`}>
        {isOpen &&
          ReactDOM.createPortal(
            <div
              style={{
                position: 'absolute',
                top: `${menuPosition.top - 8}px `,
                left: `${menuPosition.left}px`,
                width: `${menuPosition.width}px`,
                zIndex: 999999
              }}
              ref={dropdownRef}
              className={`${style[`${classMUI}-container-options__menu`]}`}
            >
              <div className={`${style[`${classMUI}-container-options__menu--list`]}`}>
                {listOptions.map((value) => (
                  <SelectItem
                    selected={selectedValue?.id === value.id}
                    disable={selectedValue?.id === value.id}
                    key={value.id}
                    onClick={() => selectValue(value.id)}
                    text={value.label}
                  />
                ))}
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  )
}

export default ContainerDesktop
