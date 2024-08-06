import React from 'react'
import { ISelect2DesktopProps } from './Select2Desktop.interface'
import { Select2Input, Select2Tags, Select2List } from '../../children'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './Select2Desktop.module.scss'

const Component = <T,>({
  className,
  clickOut,
  disabled,
  disableList,
  handleChange,
  handleSearch,
  haveTags,
  icon,
  list,
  placeholder,
  removeValue,
  searchValue,
  setClickOut = () => ({}),
  valueSelected,
  render,
  isMultiple
}: ISelect2DesktopProps<T>): JSX.Element => {
  return (
    <div className={CNM.get({ styles, cls: ['select2-desktop', className] })}>
      <Select2Input
        searchValue={searchValue}
        placeholder={placeholder}
        clickOut={clickOut}
        disabled={disabled}
        handleSearch={handleSearch}
        setClickOut={setClickOut}
        disableList={disableList}
        icon={icon}
        valueSelected={valueSelected}
        isMultiple={isMultiple}
      />

      <Select2Tags onRemove={removeValue} tags={valueSelected} visible={haveTags} />

      <Select2List
        disabledList={disableList}
        list={list}
        onSelected={handleChange}
        selected={valueSelected}
        visible={clickOut}
        render={render}
      />
    </div>
  )
}

/**
 * Molecule UI child component of select 2
 */
export const Select2Desktop = Component
