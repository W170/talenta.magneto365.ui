import React, { useCallback, useState, useEffect } from 'react'
import { ISelect2MobileProps } from './Select2Mobile.interface'
import { MobileDrawer } from '@components/UI/molecules'
import { Select2Input, Select2List, Select2Tags } from '../../children'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './Select2Mobile.module.scss'

const Component = <T,>({
  className,
  disabled,
  disableList,
  handleChange,
  handleSearch,
  haveTags,
  icon,
  isMobile,
  isMultiple,
  limitSelections,
  list,
  placeholder,
  removeValue,
  searchValue,
  setClickOut = () => ({}),
  valueSelected,
  render
}: ISelect2MobileProps<T>): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if ((isMultiple && limitSelections === valueSelected.length) || (!isMultiple && valueSelected.length)) {
      setIsModalOpen(false)
    }
  }, [disableList, isMultiple, limitSelections, valueSelected])

  const handleVisible = useCallback((visible: boolean) => {
    setIsModalOpen(visible)
  }, [])

  return (
    <React.Fragment>
      <Select2Input
        searchValue={searchValue}
        placeholder={placeholder}
        clickOut={false}
        disabled={disabled}
        handleSearch={handleSearch}
        setClickOut={() => handleVisible(true)}
        disableList={disableList}
        isMultiple={isMultiple}
        icon={icon}
        valueSelected={valueSelected}
      />
      <Select2Tags onRemove={removeValue} tags={valueSelected} visible={haveTags} />
      <MobileDrawer
        isOpen={isModalOpen && !disableList}
        onClose={() => handleVisible(false)}
        className={CNM.get({ styles, cls: ['select2-desktop', className] })}
      >
        <Select2Input
          searchValue={searchValue}
          placeholder={placeholder}
          clickOut
          disabled={disabled}
          handleSearch={handleSearch}
          setClickOut={setClickOut}
          disableList={disableList}
          icon={icon}
          valueSelected={valueSelected}
          name={`${placeholder}-mobile`}
          isMultiple={isMultiple}
        />
        <Select2Tags onRemove={removeValue} tags={valueSelected} visible={haveTags} />
        <Select2List
          disabledList={disableList}
          isMobile={isMobile}
          list={list}
          onSelected={handleChange}
          selected={valueSelected}
          visible
          render={render}
        />
      </MobileDrawer>
    </React.Fragment>
  )
}

/**
 * Molecule UI child component of select 2
 */
export const Select2Mobile = Component
