import React, { useMemo } from 'react'
import { InputSearch, Tag } from '@components/UI/atoms'
import { SelectItem } from '../../SelectItem'
import { Close } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import style from './ContainerDesktop.module.scss'
import { IContainerOptions } from '../ContainerOptions.interface'
import { DropDownButton } from '../../DropDownButton'
import { withClickOut } from '@components/hoc'
import { IListOption } from '../../../MultipleSelectionEntry.interface'

const ContainerDesktop: React.FC<IContainerOptions> = ({
  inputSearchProps,
  selectedValues,
  listOptions,
  removeValueToArray,
  addValueToArray,
  numberOfSelectable,
  dropDownTitle,
  clickOut = false,
  setClickOut = () => ({})
}) => {
  const limitOfSelectable = useMemo(() => {
    return selectedValues.length < numberOfSelectable
  }, [numberOfSelectable, selectedValues.length])

  const removeTag = (itemSelected: IListOption) => {
    removeValueToArray(itemSelected)
    setTimeout(() => {
      setClickOut(true)
    }, 0.1)
  }

  return (
    <>
      {clickOut ? (
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
                  onClick={() => removeTag(itemSelected)}
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
              k=
            </div>
          </div>
        </div>
      ) : (
        <>
          {limitOfSelectable && <DropDownButton title={dropDownTitle} onClick={() => setClickOut(true)} />}
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
        </>
      )}
    </>
  )
}

export default withClickOut(ContainerDesktop)
