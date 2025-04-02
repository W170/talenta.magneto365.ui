import React from 'react'
import { TInputFileContainer } from './InputFileContainer.interface'
import style from './InputFileContainer.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(style)

const Component: React.FC<TInputFileContainer> = ({ className, children, ...props }) => {
  return (
    <div className={cx('magneto-ui-input-file-container', className)} {...props}>
      {children}
    </div>
  )
}

/**
 * Atom UI component of Input File
 */
export const InputFileContainer = Component
