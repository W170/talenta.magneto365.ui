import React, { useMemo } from 'react'
import { Drawer } from '@components/UI/molecules'
import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import { JobDetailsDrawerContext } from './JobDetailsDrawer.context'

export const JobDetailsDrawer: React.FC<IJobDetailsDrawer> = (props) => {
  const value = useMemo(() => ({ onClose: props.onClose }), [props.onClose])
  return (
    <JobDetailsDrawerContext.Provider value={value}>
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
    </JobDetailsDrawerContext.Provider>
  )
}
