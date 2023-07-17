import React, { useLayoutEffect, useState } from 'react'
import { JobCompanyLogo, JobHeader } from '../../atoms'
import { IJobCompanyHeader } from './JobCompanyHeader.interface'
import styles from './JobCompanyHeader.module.scss'

const Component: React.FC<IJobCompanyHeader> = ({ jobCompanyLogoProps, jobHeaderProps }) => {
  const [isHidden, setIsHidden] = useState(false)

  useLayoutEffect(() => {
    const handleInitialScroll = () => {
      const scrollY = window.scrollY

      if (scrollY === 0) {
        setIsHidden(false)
      } else if (!isHidden) {
        setIsHidden(true)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleInitialScroll)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleInitialScroll)
      }
    }
  }, [isHidden])

  return (
    <div className={styles.JobCompanyHeaderComponent}>
      <JobCompanyLogo {...jobCompanyLogoProps} isHidden={isHidden} />
      <JobHeader {...jobHeaderProps} isHidden={isHidden} />
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const JobCompanyHeader = Component
