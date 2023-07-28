import React from 'react'
import { IconItem } from '../../atoms'
import { IListIcon } from '../ListIconLink'
import { IJobFooterCard } from './JobFooterCard.interface'
import styles from './JobFooterCard.module.scss'

const Component: React.FC<IJobFooterCard> = ({
  jobFooterCompanyImg,
  companyImgAlt,
  jobFooterHeader,
  jobFooterLinks
}) => {
  return (
    <div className={styles.JobFooterCardComponent}>
      <img src={jobFooterCompanyImg} alt={companyImgAlt} />
      <div className={styles['JobFooterIcons']}>
        <h2>{jobFooterHeader}</h2>
        <div className={styles['JobIconsWrapper']}>
          {jobFooterLinks.map(({ url, icon }: IListIcon, index: number) => (
            <a key={index} href={url} target="" rel="">
              <IconItem hover={true} size={21} icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * UI Molecule component for Job Footer Card
 */

export const JobFooterCard = Component
