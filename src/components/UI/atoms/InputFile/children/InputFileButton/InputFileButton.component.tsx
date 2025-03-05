import React from 'react'
import { TInputFileButton } from './InputFileButton.interface'
import { classNames } from '@shared/utils/common'
import style from './InputFileButton.module.scss'

const cx = classNames.bind(style)

const Component: React.FC<TInputFileButton> = ({ children, className, ...props }) => {
  return (
    <button className={cx('magneto-ui-input-file-button', className)} {...props}>
      {children}
    </button>
  )
}

/**
 * Atom UI child component of Input File
 */
export const InputFileButton = Component
