import React, { useLayoutEffect, useState } from 'react'
import { CompanyLogo, JobHeader } from '../../atoms'
import { ICompanyJobHeader } from './CompanyJobHeader.interface'
import styles from './CompanyJobHeader.module.scss'

const Component: React.FC<ICompanyJobHeader> = ({ companyLogoProps, jobHeaderProps }) => {
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
    <div className={styles.CompanyJobHeaderComponent}>
      <CompanyLogo {...companyLogoProps} isHidden={isHidden} />
      <JobHeader {...jobHeaderProps} isHidden={isHidden} />
    </div>
  )
}

/**
 * UI Molecule component for Company Job Header
 */

export const CompanyJobHeader = Component
