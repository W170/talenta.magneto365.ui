import React, { useState, useMemo } from 'react'
import { InputSearch, Tag } from '@components/UI/atoms'
import { SelectItem } from '../../SelectItem'
import { Close } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import { IContainerOptions } from '../ContainerOptions.interface'
import { MobileDrawer } from '@components/UI/molecules'
import style from './ContainerMobile.module.scss'
import { DropDownButton } from '../../DropDownButton'

const ContainerDesktop: React.FC<IContainerOptions> = ({
  inputSearchProps,
  selectedValues,
  listOptions,
  removeValueToArray,
  addValueToArray,
  dropDownTitle,
  numberOfSelectable
}) => {
  const [openOptions, setOpenOptions] = useState(false)

  const limitOfSelectable = useMemo(() => {
    return selectedValues.length < numberOfSelectable
  }, [numberOfSelectable, selectedValues.length])

  return (
    <>
      {limitOfSelectable && <DropDownButton title={dropDownTitle} onClick={() => setOpenOptions(true)} />}
      <div className={`${style[`${classMUI}-container-options-tags-container`]}`}>
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
      <div style={{ zIndex: 99999999 }}>
        <MobileDrawer isOpen={openOptions} onClose={() => setOpenOptions(false)}>
          <div className={`${style[`${classMUI}-container-options`]}`}>
            <InputSearch {...inputSearchProps} />
            <div className={`${style[`${classMUI}-container-options__menu`]}`}>
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
                    disable={!limitOfSelectable}
                    key={value.id}
                    onClick={() => addValueToArray(value)}
                    text={value.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </MobileDrawer>
      </div>
    </>
  )
}

export default ContainerDesktop
