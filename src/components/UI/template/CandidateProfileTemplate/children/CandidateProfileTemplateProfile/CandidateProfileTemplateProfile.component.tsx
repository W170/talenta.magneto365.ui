import React, { useState, useEffect, useCallback } from 'react'
import { ICandidateProfileTemplateProfile } from './CandidateProfileTemplateProfile.interface'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateProfile.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const customScrollbarButtonsStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

const Component: React.FC<ICandidateProfileTemplateProfile> = ({ children, containerRef, getContainer }) => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isInTop, setIsInTop] = useState<boolean>(true)

  const { isProfileOpen, setIsProfileOpen, navHeight } = useCandidateProfile()

  const handleOnChangeOpen = useCallback(
    (localIsOpen: boolean) => {
      setIsProfileOpen(localIsOpen)

      if (localIsOpen && window.scrollY > 0) {
        setIsInTop(localIsOpen)

        const containerElement = containerRef?.current || getContainer?.()

        if (containerElement) {
          containerElement.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    },
    [containerRef, getContainer, setIsProfileOpen]
  )

  useEffect(() => {
    const containerElement = containerRef?.current || getContainer?.()

    const handleScroll = () => {
      if (scrolled && !isInTop) return
      const scrollY = containerElement ? containerElement.scrollTop : window.scrollY
      setScrolled(scrollY > 0)
    }

    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', handleScroll)
      } else {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [containerRef, getContainer, isInTop, scrolled])

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
