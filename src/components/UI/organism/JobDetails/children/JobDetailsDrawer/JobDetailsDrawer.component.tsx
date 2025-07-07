import React from 'react'
import { Drawer } from '@components/UI/molecules'
import { classNames } from '@shared/utils/common'
import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import styles from './JobDetailsDrawer.module.scss'

const cx = classNames.bind(styles)

export const JobDetailsDrawer: React.FC<IJobDetailsDrawer> = (props) => (
  <Drawer
    {...props}
    customPadding={0}
    className={cx('drawer', props.className)}
    hideButton
    direction="right"
    drawerWidth="fit-content"
  >
    {props.children}
  </Drawer>
)
