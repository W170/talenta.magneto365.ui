import React, { useContext, useMemo } from 'react'
import { LogoComponent } from '../../atoms/Logo'
import { Tab } from '../Tab'
import { ResponsiveContext } from '../../../context/ResponsiveContext.component'
import { screenSize } from '../../../../constants/responsive.constants'
import { IHeaderDrawerTabs } from './HeaderDrawerTabs.interface'
import { withStyles } from './HeaderDrawerTabs.styles'

const Component: React.FC<IHeaderDrawerTabs> = ({ className, tabProps, logoProps }) => {
  const { dim } = useContext(ResponsiveContext)

  const isMobile = useMemo(() => {
    return dim.size <= screenSize.md
  }, [dim.size])

  return (
    <div className={className}>
      <LogoComponent isoView={isMobile} {...logoProps} />
      <Tab {...tabProps} />
    </div>
  )
}

export const HeaderDrawerTabs = withStyles(Component)
