import React, { useCallback } from 'react'
import { ISelect2ListProps } from './Select2List.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './Select2List.module.scss'
import { ISelectField } from '../../Select2.interface'

const Component = <T,>({
  disabledList,
  isMobile,
  list,
  onSelected,
  selected,
  visible,
  render
}: ISelect2ListProps<T>): JSX.Element | null => {
  const itemStyles = useCallback(
    (localId?: string | number) =>
      CNM.get({
        styles,
        cls: [
          'select2-list__item',
          selected?.some(({ id }) => id === localId)
            ? 'select2-list__item--is-selected'
            : 'select2-list__item--not-selected'
        ]
      }),
    [selected]
  )

  const renderComponent = useCallback(
    (props: ISelectField & T, index: number) => {
      if (render) return render({ ...props }, index)

      return (
        <React.Fragment>
          {props?.img && <img src={props.img} alt="list-img" />}
          {props?.name}
        </React.Fragment>
      )
    },
    [render]
  )

  if (!visible) return null

  if (!list.length) return null

  return (
    <div className={CNM.get({ styles, cls: ['select2-list', !isMobile && 'select2-list--desktop'] })}>
      {list.map(({ ...props }, index) => (
        <button
          type="button"
          key={props?.id}
          onClick={() => onSelected(props)}
          disabled={selected?.some(({ id }) => id === props?.id) || disabledList}
          className={itemStyles(props?.id)}
        >
          {renderComponent(props, index)}
        </button>
      ))}
    </div>
  )
}

/**
 * Molecule UI child component of select 2
 */
export const Select2List = Component
