import React, { useCallback } from 'react'
import { EXPANDABLE_INFO_MESSAGE_ICONS } from './ExpandableInfoMessage.constants'
import { IExpandableInfoMessageProps } from './ExpandableInfoMessage.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './ExpandableInfoMessage.module.scss'
import { IconItem } from '@components/UI/atoms'

const Component: React.FC<IExpandableInfoMessageProps> = ({ className, title, prefixIcon, variant }) => {
  const icon = useCallback(
    (icon?: string | null) => {
      if (icon) {
        if (Object.keys(EXPANDABLE_INFO_MESSAGE_ICONS).includes(icon) && variant) {
          return EXPANDABLE_INFO_MESSAGE_ICONS[icon][variant]
        }
        return icon
      }
      return
    },
    [variant]
  )

  if (!title) return null

  return (
    <div className={CNM.get({ styles, cls: ['expandable-info-message', className] })}>
      <div className={CNM.get({ styles, cls: ['expandable-info-message__container'] })}>
        {prefixIcon && <IconItem size={16} {...prefixIcon} icon={icon(prefixIcon.icon)} />}
        <span
          className={CNM.get({
            styles,
            cls: ['expandable-info-message__text', `expandable-info-message__text--${variant}`]
          })}
        >
          {title}
        </span>
      </div>
    </div>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoMessage = Component
