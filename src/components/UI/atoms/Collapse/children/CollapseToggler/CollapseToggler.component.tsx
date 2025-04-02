import React, { useCallback } from 'react'
import { TCollapseToggler } from './CollapseToggler.interface'
import { useCollapse } from '../../Collapse.context'
import styles from './CollapseToggler.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCollapseToggler> = ({ children, className, onClick, ...props }) => {
  const { open, onChangeOpen } = useCollapse()

  const handleOnClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) onClick(evt)
      onChangeOpen(!open)
    },
    [open, onChangeOpen, onClick]
  )

  return (
    <button {...props} onClick={handleOnClick} className={cx('magneto-ui-collapse-toggler', className)}>
      {children}
    </button>
  )
}

/**
 * Atom UI component child of Collapse
 */
export const CollapseToggler = Component
