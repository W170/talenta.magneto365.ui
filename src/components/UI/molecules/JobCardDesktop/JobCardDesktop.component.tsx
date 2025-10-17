import React, { useMemo, useRef } from 'react'
import { classMUI } from '@constants/stories'
import { NoLogo } from '../../../../constants/icons.constants'
import { ICardJobDesktop } from './JobCardDesktop.interface'
import { classNames } from '@shared/utils/common'
import style from './JobCardDesktop.module.scss'
import { altDynamicText } from '@constants/img.constants'
import JobCardLabelStatus from '../JobCard/children/JobCardLabelStatus/JobCardLabelStatus.component'

const cx = classNames.bind(style)

const getJobSubtitle = (companyName?: string | null, ...args: Array<string | null | undefined>) => {
  const additionalData = args.filter((arg) => arg !== undefined).join(', ')
  if (companyName) return `${companyName} | ${additionalData}`
  return additionalData
}

const JobCardDesktop: React.FC<ICardJobDesktop> = ({
  isCompanyPage = false,
  jobOpen,
  cities = [],
  salary,
  wasSeen,
  companyName,
  title,
  formatPublishDate,
  companyLogo,
  contractType,
  showDetail,
  urgent,
  jobSlug,
  dynamicUrl,
  labelStatus
}) => {
  const optionsRef = useRef<HTMLElement>(null)

  const citiesformatted = useMemo(() => {
    const safeCities = Array.isArray(cities) ? cities : []

    return safeCities.length > 5 ? safeCities.slice(0, 5).join(', ') : safeCities.join(', ')
  }, [cities])
  const seenModifier = useMemo(() => {
    return wasSeen ? `${classMUI}-card-jobs__text--is-seen` : ''
  }, [wasSeen])

  return (
    <div className={cx(`${classMUI}-card-jobs__container`, jobOpen && `${classMUI}-card-jobs--job-open`)}>
      <article onClick={showDetail} className={cx(`${classMUI}-card-jobs`, urgent && `${classMUI}-card-jobs--urgent`)}>
        {!isCompanyPage && (
          <div className={cx(`${classMUI}-card-jobs__brand`)}>
            <div>
              <img
                className={cx(`${classMUI}-card-jobs__brand-img`)}
                alt={companyName ? `${altDynamicText.workAt} ${companyName}` : 'company-name'}
                src={companyLogo ? companyLogo : NoLogo}
                loading="lazy"
                width={'67px'}
                height={'67px'}
              />
            </div>
          </div>
        )}

        <div className={cx(`${classMUI}-card-jobs__data`)}>
          <section className={cx(`${classMUI}-card-jobs__header`)}>
            <span className={cx(`${classMUI}-card-jobs__text`, `${classMUI}-card-jobs__published`)}>
              {formatPublishDate}
            </span>
            <section ref={optionsRef} className={cx(`${classMUI}-card-jobs__options`, 'opciones')}>
              {/** Reference container to place right content */}
            </section>
          </section>
          <h2
            className={cx(
              `${classMUI}-card-jobs__text`,
              `${seenModifier}`,
              `${classMUI}-card-jobs__text--big`,
              `${classMUI}-card-jobs__text--bold`
            )}
          >
            <a
              href={`${dynamicUrl}/${jobSlug}`}
              title={title as string}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.preventDefault()}
              className={cx(`${classMUI}-card-jobs__a`)}
            >
              {title}
            </a>
          </h2>
          <h3 className={cx(`${classMUI}-card-jobs__text`, `${seenModifier}`)}>
            {getJobSubtitle(companyName, contractType)}
          </h3>
          <p className={cx(`${classMUI}-card-jobs__text`, `${seenModifier}`)}>{salary}</p>
          <p className={cx(`${classMUI}-card-jobs__text`, `${seenModifier}`)}>{citiesformatted}</p>
          {labelStatus && <JobCardLabelStatus {...labelStatus} />}
        </div>
      </article>
    </div>
  )
}

export default JobCardDesktop
