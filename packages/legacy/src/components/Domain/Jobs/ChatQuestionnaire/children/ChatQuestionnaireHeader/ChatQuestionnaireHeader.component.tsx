import React from 'react'
import { classNames } from '@shared/utils/common'
import Robot from '@assets/img/3d-robot-music.webp'
import { ArrowLeft2 } from '@constants/icons.constants'
import { IconItem, Typography } from '@components/UI/atoms'
import { IChatQuestionnaireHeader } from './ChatQuestionnaireHeader.interface'
import styles from './ChatQuestionnaireHeader.module.scss'

const cx = classNames.bind(styles)

export const ChatQuestionnaireHeader: React.FC<IChatQuestionnaireHeader> = ({
  classNames,
  children,
  onBack,
  ...rest
}) => {
  return (
    <header {...rest} className={cx('header', rest.className)}>
      <button
        type="button"
        onClick={() => onBack?.()}
        className={cx('clean-button', classNames?.iconBack)}
        aria-label="Go back"
      >
        <IconItem icon={ArrowLeft2} size={20} />
      </button>
      <IconItem icon={Robot} size={49} className={classNames?.iconLogo} />
      <Typography.Title size="md-2" weight="bold" color="grey-700" className={classNames?.title} level={3}>
        {children}
      </Typography.Title>
    </header>
  )
}
