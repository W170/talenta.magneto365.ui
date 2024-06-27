import React, { useMemo } from 'react'
import { Input, Tag } from '@components/UI/atoms'
import { withClickOut } from '@components/hoc'
import { classMUI } from '@constants/stories'
import { ArrowLeft2, Close } from '../../../../constants/icons.constants'
import { ISelectOptions } from './Select2.interface'
import styles from './Select2.module.scss'
import useSelect2 from './Select2.hook'

const Component: React.FC<ISelectOptions> = ({
  selectList,
  placeholder,
  clickOut,
  onChange,
  haveTags,
  isMultiple = false,
  limitSelections,
  setTerm,
  icon,
  disabled,
  setClickOut = () => ({}),
  currentFields
}) => {
  const { disableList, handleChange, handleSearch, list, removeValue, searchValue, valueSelected } = useSelect2({
    selectList,
    onChange,
    isMultiple,
    limitSelections,
    setTerm,
    setClickOut,
    currentFields
  })
  const arrowRotate = useMemo(() => (clickOut ? styles['rotate-arrow'] : styles['static-arrow']), [clickOut])

  return (
    <div className={styles[`${classMUI}-input-select`]}>
      <div style={{ display: clickOut ? 'block' : 'none' }}>
        <Input
          type="text"
          value={searchValue}
          placeholder={placeholder}
          name={placeholder}
          hideIcon
          onChange={handleSearch}
          disabled={disabled}
        />
      </div>
      <button
        style={{ display: clickOut ? 'none' : 'flex' }}
        onClick={() => setClickOut(!clickOut)}
        type="button"
        className={`${styles[`${classMUI}-input-select__dropdown`]} ${
          disableList || disabled ? styles['btn-disabled'] : ''
        }`}
        disabled={disableList || disabled}
      >
        <span>
          {icon && <img src={icon} alt="select-icon" />}

          <p className={valueSelected.length ? styles.selected : styles.placeholder}>
            {valueSelected[0]?.img && <img src={valueSelected[0]?.img} alt="selected-img" />}

            {haveTags ? placeholder : valueSelected[0]?.name || placeholder}
          </p>
        </span>
        <img src={ArrowLeft2} alt="arrow-icon" className={arrowRotate} />
      </button>
      {haveTags && valueSelected.length > 0 && (
        <div className={styles[`${classMUI}-input-select__tags`]}>
          {valueSelected?.map(({ id, name }) => (
            <Tag onClick={() => removeValue(id)} icon={Close} key={id} text={name} />
          ))}
        </div>
      )}

      {clickOut && (
        <div className={styles[`${classMUI}-input-select__list`]}>
          {list?.map(({ ...props }) => (
            <button
              onClick={() => handleChange(props)}
              key={props?.id}
              type="button"
              className={styles[valueSelected?.some(({ id }) => id === props?.id) ? 'is-selected' : 'not-selected']}
              disabled={valueSelected?.some(({ id }) => id === props?.id) || disableList}
            >
              {props?.img && <img src={props.img} alt="list-img" />}
              {props?.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export const Select2 = withClickOut(Component)
