import React from 'react'
import { Drawer, MobileJobDetailsHeader } from '@components/UI/molecules'
import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'

export const JobDetailsDrawer: React.FC<IJobDetailsDrawer> = ({ onClose, title = '', ...rest }) => (
  <Drawer hideButton direction="right" drawerWidth="fit-content" onClose={onClose} {...rest}>
    <MobileJobDetailsHeader returnText={title} onClick={onClose} />
    {rest.children}
  </Drawer>
)
