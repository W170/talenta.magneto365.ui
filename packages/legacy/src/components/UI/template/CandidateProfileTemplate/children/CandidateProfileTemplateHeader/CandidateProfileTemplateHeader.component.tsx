import React, { useEffect, useRef } from 'react'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateHeader.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC = ({ children }) => {
  const { setHeaderHeight } = useCandidateProfile()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (!headerRef.current) return
      setHeaderHeight(headerRef.current.offsetHeight)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setHeaderHeight])

  return (
    <div ref={headerRef} className={cx('magneto-ui-candidate-profile-template-header')}>
      {children}
    </div>
  )
}

/**
 * Template UI child component of Candidate Profile.
 */
export const CandidateProfileTemplateHeader = Component
