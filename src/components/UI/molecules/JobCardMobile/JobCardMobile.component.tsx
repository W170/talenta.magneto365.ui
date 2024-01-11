import React from 'react'
import { classMUI } from '@constants/stories'
import style from './JobCardMobile.module.scss'
import { ICardJobMobile } from './JobCardMobile.interface'
import { NoLogo } from '@constants/icons.constants'

const JobCardMobile: React.FC<ICardJobMobile> = ({
  isCompanyPage = false,
  workSeen,
  jobOpen,
  cities = [],
  salary,
  companyName,
  title,
  educationLevel,
  formatPublishDate,
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
            <img
              className={style[`${classMUI}-card-mobile-jobs--brand__img`]}
              alt={companySlug ? companySlug : 'company-slug'}
              src={companyLogo ? companyLogo : NoLogo}
            />
          </div>
        </div>
      )}

      <div className={style[`${classMUI}-card-mobile-jobs--data`]}>
        <div className={style[`${classMUI}-card-mobile-jobs--row2`]}>
          <div>
            <h2 className={`${style[`${classMUI}-card-mobile-jobs--row2__position`]} ${workSeen}`}>{title}</h2>
          </div>
          <div className={style[`${classMUI}-card-mobile-jobs--row2__info`]}>
            <h3>{companyName},</h3>
            <p>{formatPublishDate},</p>
            <p>
              {cities[0]} {cities?.length > 1 && <span>{others},</span>}{' '}
            </p>
            <p>{salary}</p>
            <p>{experience} </p>
            <p>{educationLevel}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default JobCardMobile
