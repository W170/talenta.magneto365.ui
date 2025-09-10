import React, { useContext } from 'react'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms/Icon'
import { ArrowLeft2 } from '@constants/icons.constants'
import { JobDetailsDrawerContext } from '../JobDetailsDrawer.context'
import styles from './JobDetailsDrawerClose.module.scss'

const cx = classNames.bind(styles)

const JobDetailsDrawerClose = (props: JSX.IntrinsicElements['button']) => {
  const { onClose } = useContext(JobDetailsDrawerContext)
  return (
    <button
      {...props}
      className={cx('drawer-button', props.className)}
      onClick={(e) => {
        onClose()
        props.onClick?.(e)
      }}
    >
      <IconItem icon={ArrowLeft2} size={16} />
      {props.children}
    </button>
  )
}

export default JobDetailsDrawerClose
