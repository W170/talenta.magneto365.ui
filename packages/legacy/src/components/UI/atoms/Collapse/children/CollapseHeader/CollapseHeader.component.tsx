import React from 'react'
import { TCollapseHeader } from './CollapseHeader.interface'
import { classNames } from '@shared/utils/common'
import styles from './CollapseHeader.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<TCollapseHeader> = ({ children, className, ...props }) => {
  return (
    <header className={cx('magneto-ui-collapse-header', className)} {...props}>
      {children}
    </header>
  )
}

/**
 * Atom UI component child of Collapse
 */
export const CollapseHeader = Component
