import React, { useMemo } from 'react'
import { classMUI } from '../../../../constants/stories.constants'
import { IconItem } from '../../atoms'
import { ArrowRight2 } from '../../../../constants/icons.constants'
import style from './JobCardDesktop.module.scss'
import { ICardJobDesktop } from './JobCardDesktop.interface'

const JobCardDesktop: React.FC<ICardJobDesktop> = ({
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
  contractType,
  showDetail,
  others
}) => {
  const citiesformatted = useMemo(() => {
    if (cities.length > 5) {
      return cities.slice(0, 5).join(', ')
    }
    return cities.join(', ')
  }, [cities])

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
            <img className={style[`${classMUI}-card-jobs--brand__img`]} alt={companySlug} src={companyLogo} />
          </div>
        </div>
      )}

      <div className={style[`${classMUI}-card-jobs--data`]}>
        <div className={style[`${classMUI}-card-jobs--row2`]}>
          <p className={`${style[`${classMUI}-card-jobs--row2__position`]} ${workSeen}`}>{title}</p>
          <p>{companyName}</p>
          <p>{publishDate}</p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row3`]}>
          <p>
            {citiesformatted}
            {cities.length > 5 && ', ' + others}
          </p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row4`]}>
          <p>{contractType}, </p>
          <p>
            {minSalary} - {maxSalary},
          </p>
          <p>{experience}, </p>
          <p>{educationLevel},</p>
        </div>
      </div>
      <div className={style[`${classMUI}-card-jobs--arrow`]}>
        <IconItem Icon={ArrowRight2} />
      </div>
    </article>
  )
}

export default JobCardDesktop
