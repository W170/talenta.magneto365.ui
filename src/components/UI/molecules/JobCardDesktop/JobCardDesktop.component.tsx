import React, { useMemo, useRef } from 'react'
import { classMUI } from '@constants/stories'
import { IconItem } from '../../atoms'
import { ArrowLeft2, NoLogo, Urgent } from '../../../../constants/icons.constants'
import { ICardJobDesktop } from './JobCardDesktop.interface'
import { classNames } from '@shared/utils/common'
import style from './JobCardDesktop.module.scss'
import { useWithElement } from '@components/hooks/useWithElement'

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
  companyName,
  title,
  formatPublishDate,
  companyLogo,
  companySlug,
  contractType,
  showDetail,
  urgent,
  jobSlug,
  dynamicUrl,
  renderRight
}) => {
  const optionsRef = useRef<HTMLElement>(null)

  const width = useWithElement(optionsRef)

  const citiesformatted = useMemo(() => {
    if (cities?.length > 5) {
      return cities?.slice(0, 5).join(', ')
    }
    return cities?.join(', ')
  }, [cities])

  return (
    <div className={cx(`${classMUI}-card-jobs__container`, jobOpen && `${classMUI}-card-jobs--job-open`)}>
      <article onClick={showDetail} className={cx(`${classMUI}-card-jobs`, urgent && `${classMUI}-card-jobs--urgent`)}>
        {!isCompanyPage && (
          <div className={cx(`${classMUI}-card-jobs__brand`)}>
            <div>
              <img
                className={cx(`${classMUI}-card-jobs__brand-img`)}
                alt={companySlug ? companySlug : 'company-slug'}
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
          <h3 className={cx(`${classMUI}-card-jobs__text`)}>{getJobSubtitle(companyName, contractType)}</h3>
          <p className={cx(`${classMUI}-card-jobs__text`)}>{salary}</p>
          <p className={cx(`${classMUI}-card-jobs__text`)}>{citiesformatted}</p>
        </div>
      </article>
      <div style={{ width: width || 300 }} className={cx(`${classMUI}-card-jobs__render-right`)}>
        <div className={cx(`${classMUI}-card-jobs__white-space`)} onClick={() => showDetail?.()}>
          {urgent ? (
            <span className={cx(`${classMUI}-card-jobs__urgent`, `${classMUI}-card-jobs__text--small`)}>
              <IconItem className={cx(`${classMUI}-card-jobs__urgent-icon`)} icon={Urgent} size={14} /> {urgent}
            </span>
          ) : null}
        </div>
        {renderRight ? renderRight() : null}
        <button className={cx(`${classMUI}-card-jobs__button`)} onClick={() => showDetail?.()}>
          <IconItem icon={ArrowLeft2} size={16} className={cx(`${classMUI}-card-jobs__arrow`)} />
        </button>
      </div>
    </div>
  )
}

export default JobCardDesktop
