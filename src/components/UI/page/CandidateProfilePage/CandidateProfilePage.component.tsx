import React, { useEffect, useState } from 'react'

import { classMUI } from '@constants/stories'
import { ICandidateProfilePage } from '@components/UI/page'
import { CandidateProfile } from '@components/UI/molecules/CandidateProfile'
import { CandidateNavigationBar, CandidateOverview, HorizontalMenu } from '@components/UI/molecules'
import style from './CandidateProfilePage.module.scss'

const Component: React.FC<ICandidateProfilePage> = ({
  candidateOverviewProps,
  expandableInfoProps,
  candidateProfileProps,
  horizontalMenuProps,
  candidateNavigationBarProps
}) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={style[`${classMUI}-candidateProfile-page`]}>
      <HorizontalMenu {...horizontalMenuProps} className={style[`${classMUI}-candidateProfile-page__header`]} />
      <div
        className={`${style[`${classMUI}-candidateProfile-page__content__header`]} ${
          isFixed ? `${style[`${classMUI}-candidateProfile-page__content__header__fixed`]}` : ''
        }`}
      >
        <CandidateProfile
          details={candidateProfileProps.details}
          data={candidateProfileProps.data}
          expandableInfoProps={expandableInfoProps}
          expandable={isFixed ? false : undefined}
        />
      </div>
      <CandidateOverview {...candidateOverviewProps} />
      <CandidateNavigationBar
        {...candidateNavigationBarProps}
        className={style[`${classMUI}-candidateProfile-page__footer`]}
      />
    </div>
  )
}
export const CandidateProfilePage = Component
