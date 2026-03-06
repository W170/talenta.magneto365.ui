import React, { useState } from 'react'
import { SelectItem } from '../../SelectItem'
import { classMUI } from '@constants/stories'
import { IContainerOptions } from '../ContainerOptions.interface'
import { MobileDrawer } from '@components/UI/molecules'
import style from './ContainerMobile.module.scss'
import { DropDownButton } from '../../DropDownButton'

const ContainerDesktop: React.FC<IContainerOptions> = ({ listOptions, addValue, dropDownTitle, selectedValue }) => {
  const [openOptions, setOpenOptions] = useState(false)

  const selectValue = (value: number) => {
    addValue(value)
    setOpenOptions(false)
  }

  return (
    <>
      <DropDownButton title={dropDownTitle} onClick={() => setOpenOptions(true)} />
      <div style={{ zIndex: 99999999 }}>
        <MobileDrawer isOpen={openOptions} onClose={() => setOpenOptions(false)}>
          <div className={`${style[`${classMUI}-container-options`]}`}>
            <div className={`${style[`${classMUI}-container-options__menu`]}`}>
              <div className={`${style[`${classMUI}-container-options__menu--list`]}`}>
                {listOptions.map((value) => (
                  <SelectItem
                    selected={selectedValue?.id === value.id}
                    key={value.id}
                    onClick={() => selectValue(value.id)}
                    text={value.label}
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
