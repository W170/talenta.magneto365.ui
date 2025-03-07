import React, { useCallback, useRef, useEffect } from 'react'
import { TCandidateProfilePageNav } from './CandidateProfileTemplateNav.interface'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateNav.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfilePageNav> = ({ children, className, ...props }) => {
  const { setNavHeight } = useCandidateProfile()
  const navRef = useRef<HTMLDivElement>(null)

  const handleOnShow = useCallback(
    (openedNavOptions: boolean) => {
      const screenWidth = window.innerWidth

      if (screenWidth < 360) {
        setTimeout(() => {
          setNavHeight(openedNavOptions ? 320 : navRef.current?.offsetHeight || 102)
        }, 300)
      } else {
        setNavHeight(openedNavOptions ? 320 : 102)
      }
    },
    [setNavHeight]
  )

  useEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return
      setNavHeight(navRef.current.offsetHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleOnShow, setNavHeight])

  return (
    <div {...props} ref={navRef} className={cx('magneto-ui-candidate-profile-page-nav', className)}>
      {React.isValidElement(children) ? React.cloneElement(children, { onShow: handleOnShow }) : children}
    </div>
  )
}

export const CandidateProfileTemplateNav = Component
