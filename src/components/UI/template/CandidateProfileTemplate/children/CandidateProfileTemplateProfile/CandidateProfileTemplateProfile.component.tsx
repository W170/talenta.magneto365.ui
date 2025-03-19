import React, { useState, useEffect, useCallback } from 'react'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateProfile.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const customScrollbarButtonsStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

const Component: React.FC = ({ children }) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isInTop, setIsInTop] = useState<boolean>(true)

  const { isProfileOpen, setIsProfileOpen, navHeight } = useCandidateProfile()

  const handleOnChangeOpen = useCallback(
    (localIsOpen: boolean) => {
      setIsProfileOpen(localIsOpen)

      if (localIsOpen && window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsInTop(localIsOpen)
      }
    },
    [setIsProfileOpen]
  )

  useEffect(() => {
    const handleScroll = async () => {
      if (scrolled && !isInTop) return
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isInTop, scrolled])

  useEffect(() => {
    if (scrolled) {
      setIsProfileOpen(false)
    }
  }, [scrolled, setIsProfileOpen])

  return (
    <div
      className={cx('magneto-ui-candidate-profile-template-profile')}
      style={
        {
          ...customScrollbarButtonsStyle,
          '--nav-height': `${navHeight}px`
        } as React.CSSProperties
      }
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: cx('magneto-ui-candidate-profile-template-profile__container'),
            onChangeOpen: handleOnChangeOpen,
            open: isProfileOpen
          })
        }
        return child
      })}
    </div>
  )
}

/**
 * Template UI child component of Candidate Profile.
 */
export const CandidateProfileTemplateProfile = Component
