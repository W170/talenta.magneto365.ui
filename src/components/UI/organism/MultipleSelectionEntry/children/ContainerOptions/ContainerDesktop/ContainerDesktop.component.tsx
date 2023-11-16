import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import { InputSearch, Tag } from '@components/UI/atoms'
import { SelectItem } from '../../SelectItem'
import { Close } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import { IContainerOptions } from '../ContainerOptions.interface'
import { DropDownButton } from '../../DropDownButton'
import style from './ContainerDesktop.module.scss'
import { useContainerDesktop } from './hooks'

const ContainerDesktop: React.FC<IContainerOptions> = ({
  inputSearchProps,
  selectedValues,
  listOptions,
  removeValueToArray,
  addValueToArray,
  numberOfSelectable,
  dropDownTitle
}) => {
  const { containerOptions, menuPosition, toggleDropdown, limitOfSelectable, inputRef, isOpen, dropdownRef } =
    useContainerDesktop({ numberOfSelectable, selectedValues })

  const hideComponent = useMemo(() => {
    return isOpen ? style['hide'] : ''
  }, [isOpen])

  return (
    <div style={{ zIndex: 999999 }}>
      {limitOfSelectable && (
        <div
          className={`${style[`${classMUI}-container-options-drop-down-container`]} ${hideComponent} `}
          ref={inputRef}
        >
          <DropDownButton title={dropDownTitle} onClick={toggleDropdown} />
        </div>
      )}
      <div className={`${style[`${classMUI}-container-options-tags-container`]} ${hideComponent}`}>
        {selectedValues.map((itemSelected) => (
          <Tag
            key={itemSelected.id}
            text={itemSelected.name}
            icon={Close}
            bgColor="#FFF"
            onClick={() => removeValueToArray(itemSelected)}
          />
        ))}
      </div>

      <div ref={containerOptions} className={`${style[`${classMUI}-container-options`]}`}>
        {isOpen &&
          ReactDOM.createPortal(
            <div
              style={{
                position: 'absolute',
                top: `${menuPosition.top - 60}px `,
                left: `${menuPosition.left}px`,
                width: `${menuPosition.width}px`,
                zIndex: 999999
              }}
              ref={dropdownRef}
              className={`${style[`${classMUI}-container-options__menu`]}`}
            >
              {inputSearchProps && <InputSearch {...inputSearchProps} />}
              <div className={`${style[`${classMUI}-container-options__menu--tags`]}`}>
                {selectedValues.map((itemSelected) => (
                  <Tag
                    key={itemSelected.id}
                    text={itemSelected.name}
                    icon={Close}
                    bgColor="#F4F4FA"
                    onClick={() => removeValueToArray(itemSelected)}
                  />
                ))}
              </div>
              <div className={`${style[`${classMUI}-container-options__menu--list`]}`}>
                {listOptions.map((value) => (
                  <SelectItem
                    disable={!limitOfSelectable || selectedValues.includes(value)}
                    key={value.id}
                    onClick={() => addValueToArray(value)}
                    text={value.name}
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
