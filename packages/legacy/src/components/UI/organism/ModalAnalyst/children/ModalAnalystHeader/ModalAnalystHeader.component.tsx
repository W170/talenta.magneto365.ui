import React from 'react'
import { IconItem } from '@components/UI/atoms'
import styles from './ModalAnalystHeader.module.scss'
import CNM from '@utils/classNameManager/classNameManager.util'
import { IModalAnalystHeaderProps } from './ModalAnalystHeader.interface'
import { MODAL_ICONS } from '../../ModalAnalyst.constants'

const Component: React.FC<IModalAnalystHeaderProps> = ({ header }) => {
  return (
    <div className={CNM.get({ styles, cls: ['modal-analyst-header'] })}>
      {header?.prefixIcon && (
        <IconItem
          showDefaultFallback={false}
          size={20}
          {...header?.prefixIcon}
          icon={
            header?.prefixIcon.icon && MODAL_ICONS[header?.prefixIcon.icon]
              ? MODAL_ICONS[header?.prefixIcon.icon]
              : header.prefixIcon.icon
          }
        />
      )}
      <h2>{header?.title}</h2>
      {header?.suffixIcon && (
        <IconItem
          showDefaultFallback={false}
          size={20}
          {...header?.suffixIcon}
          icon={
            header?.suffixIcon.icon && MODAL_ICONS[header?.suffixIcon.icon]
              ? MODAL_ICONS[header?.suffixIcon.icon]
              : header.suffixIcon.icon
          }
        />
      )}
    </div>
  )
}

/**
 * Molecule UI child component of modal analyst
 */
export const ModalAnalystHeader = Component
