import React from 'react'
import styles from '../../AlertJobModal.module.scss'
import { classNames } from '@shared/utils/common'
import { IAlertJobModal } from '../../AlertJobModal.interface'
import { ArrowRightWhite } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

export const AlertJobModalButton: React.FC<IAlertJobModal.Button> = ({
  className,
  children,
  icon = ArrowRightWhite,
  sizeIcon = 14,
  ...buttonProps
}) => {
  return (
    <button className={cx('alert-modal__button', className)} {...buttonProps}>
      <p>{children}</p>
      <IconItem alt="arrow-icon" hover={false} icon={icon} size={sizeIcon} />
    </button>
  )
}
