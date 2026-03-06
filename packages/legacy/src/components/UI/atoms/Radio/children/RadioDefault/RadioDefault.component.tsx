import React from 'react'
import { IRadioDefaultProps } from './RadioDefault.interface'
import styles from './RadioDefault.module.scss'
import CNM from '@utils/classNameManager/classNameManager.util'

const Component: React.FC<IRadioDefaultProps> = ({
  checked,
  children,
  childrenClassName,
  className,
  defaultChecked,
  disabled,
  id,
  indicatorClassName,
  onChange
}) => {
  return (
    <label
      className={CNM.get({ styles, cls: ['radio-default', disabled && 'radio-default--disabled', className] })}
      htmlFor={id}
    >
      <input type="radio" id={id} disabled={disabled} checked={!!checked || !!defaultChecked} onChange={onChange} />
      <div
        className={CNM.get({
          styles,
          cls: [
            'radio-default__indicator',
            (checked || defaultChecked) && 'radio-default__indicator--checked',
            indicatorClassName
          ]
        })}
      />
      {children && (
        <span className={CNM.get({ styles, cls: ['radio-default-label', childrenClassName] })}>{children}</span>
      )}
    </label>
  )
}

/**
 * Molecule UI component for radio default
 */
export const RadioDefault = Component
