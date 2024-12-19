import { useMediaQuery } from '../../hooks'
import { IMegaMenuSideCards } from '@components/UI/molecules'
import React from 'react'
import DesktopSideCards from './withSideCards.desktop'
import MobileSideCards from './withSideCardsMobile'
import MobileSideCardsDrawer from './withSideCardsDrawer.mobile'

const withMegaMenuSideCards = <T,>(WrappedComponent: React.FC<T>) => {
  const Component: React.FC<{
    sideProps: IMegaMenuSideCards
    wrapperProps: T
    withDrawerAction?: boolean
    showContent?: boolean
  }> = ({ sideProps, wrapperProps, withDrawerAction = true, showContent = false }) => {
    const renderCards = useMediaQuery(<DesktopSideCards<T> {...{ WrappedComponent, sideProps, wrapperProps }} />, {
      md: withDrawerAction ? (
        <MobileSideCardsDrawer<T> {...{ WrappedComponent, sideProps, wrapperProps }} />
      ) : (
        <MobileSideCards<T> {...{ WrappedComponent, sideProps, wrapperProps, showContent }} />
      )
    })

    return renderCards
  }

  return Component
}

export default withMegaMenuSideCards
