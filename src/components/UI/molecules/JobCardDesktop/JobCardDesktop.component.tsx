import React, { useMemo } from 'react'
import { classMUI } from '@constants/stories'
import { IconItem } from '../../atoms'
import { ArrowRight2, NoLogo } from '../../../../constants/icons.constants'
import style from './JobCardDesktop.module.scss'
import { ICardJobDesktop } from './JobCardDesktop.interface'

const JobCardDesktop: React.FC<ICardJobDesktop> = ({
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
  contractType,
  showDetail,
  others = '',
  jobSlug,
  dynamicUrl
}) => {
  const citiesformatted = useMemo(() => {
    if (cities?.length > 5) {
      return cities?.slice(0, 5).join(', ')
    }
    return cities?.join(', ')
  }, [cities])

  const infoRow4 = [contractType, salary, experience, educationLevel].join(' ')

  return (
    <article
      onClick={showDetail}
      className={`${style[`${classMUI}-card-jobs`]} ${workSeen ? style[workSeen] : ''} ${
        jobOpen ? style[jobOpen] : ''
      }`}
    >
      {!isCompanyPage && (
        <div className={style[`${classMUI}-card-jobs--row1`]}>
          <div className={style[`${classMUI}-card-jobs--brand`]}>
            <img
              className={style[`${classMUI}-card-jobs--brand__img`]}
              alt={companySlug ? companySlug : 'company-slug'}
              src={companyLogo ? companyLogo : NoLogo}
            />
          </div>
        </div>
      )}

      <div className={style[`${classMUI}-card-jobs--data`]}>
        <div className={style[`${classMUI}-card-jobs--row2`]}>
          <a
            href={`${dynamicUrl}/${jobSlug}`}
            title={title as string}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.preventDefault()}
          >
            <h2 className={`${style[`${classMUI}-card-jobs--row2__position`]} ${workSeen}`}>{title}</h2>
          </a>
          <h3>{companyName}</h3>
          <p>{formatPublishDate}</p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row3`]}>
          <p>
            {citiesformatted}
            {cities?.length > 5 && ', ' + others}
          </p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row4`]}>
          <p>{infoRow4}</p>
        </div>
      </div>
      <div className={style[`${classMUI}-card-jobs--arrow`]}>
        <IconItem icon={ArrowRight2} />
      </div>
    </article>
  )
}

export default JobCardDesktop
