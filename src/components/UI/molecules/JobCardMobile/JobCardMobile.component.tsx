import React from 'react'
import { classMUI } from '../../../../constants/stories.constants'
import { IconItem } from '../../atoms'
import { ArrowRight2 } from '../../../../constants/icons.constants'
import style from './JobCardMobile.module.scss'
import { ICardJobMobile } from './JobCardMobile.interface'

const JobCardMobile: React.FC<ICardJobMobile> = ({
  isCompanyPage = false,
  workSeen,
  jobOpen,
  cities,
  minSalary,
  maxSalary,
  companyName,
  title,
  educationLevel,
  publishDate,
  companyLogo,
  companySlug,
  experience,
  showDetail,
  others
}) => {
  return (
    <article
      onClick={showDetail}
      className={`${style[`${classMUI}-card-mobile-jobs`]} ${workSeen ? style[workSeen] : ''} ${
        jobOpen ? style[jobOpen] : ''
      }`}
    >
      {!isCompanyPage && (
        <div className={style[`${classMUI}-card-mobile-jobs--row1`]}>
          <div className={style[`${classMUI}-card-mobile-jobs--brand`]}>
            <img className={style[`${classMUI}-card-mobile-jobs--brand__img`]} alt={companySlug} src={companyLogo} />
          </div>
        </div>
      )}

      <div className={style[`${classMUI}-card-mobile-jobs--data`]}>
        <div className={style[`${classMUI}-card-mobile-jobs--row2`]}>
          <div>
            <p className={`${style[`${classMUI}-card-mobile-jobs--row2__position`]} ${workSeen}`}>{title}</p>
          </div>
          <div className={style[`${classMUI}-card-mobile-jobs--row2__info`]}>
            <p>{companyName},</p>
            <p>{publishDate},</p>
            <p>
              {cities[0]}, {cities.length > 1 && <span>{others},</span>}{' '}
            </p>
            <p>
              {minSalary} - {maxSalary},
            </p>
            <p>{experience} </p>
            <p>{educationLevel}</p>
          </div>
        </div>
      </div>
      <div className={style[`${classMUI}-card-mobile-jobs--arrow`]}>
        <IconItem Icon={ArrowRight2} />
      </div>
    </article>
  )
}

export default JobCardMobile
