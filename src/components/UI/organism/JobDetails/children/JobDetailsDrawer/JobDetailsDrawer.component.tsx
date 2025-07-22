import React from 'react'
import { Drawer } from '@components/UI/molecules'
import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'

export const JobDetailsDrawer: React.FC<IJobDetailsDrawer> = (props) => (
  <Drawer
    {...props}
    customPadding={0}
    className={props.className}
    hideButton
    direction="right"
    drawerWidth="fit-content"
  >
    {props.children}
  </Drawer>
)
