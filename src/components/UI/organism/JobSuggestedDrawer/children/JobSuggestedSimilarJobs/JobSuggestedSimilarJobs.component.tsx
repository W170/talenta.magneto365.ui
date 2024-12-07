import React from 'react'
import { Divider, SearchItem } from '@components/UI/atoms'
import styles from './JobSuggestedSimilarJobs.module.scss'
import { ArrowRightWhite, NoLogo } from '@constants/icons.constants'
import { IJobSuggestedDrawer } from '../../JobSuggestedDrawer.interface'
import { classNames } from '@shared/utils/common'
import { SimilarCard } from '@components/UI/molecules/SimilarCard'
import { similarJobTextAdapter } from '@utils/text/textAdapter.util'
const cx = classNames.bind(styles)

const { Icon, Logo, Text } = SimilarCard

export const JobSuggestedSimilarJobs: React.FC<IJobSuggestedDrawer.SimilarJobCards> = ({
  hideLogo,
  sectionTitle,
  similarJobsCard,
  maxItemsToShow = 5,
  className,
  tag,
  url,
  notItemsDefaultAnchor = false,
  tagDefaultAnchor,
  urlDefaultAnchor
}) => {
  if (!similarJobsCard || similarJobsCard.length === 0) {
    return notItemsDefaultAnchor && tagDefaultAnchor && urlDefaultAnchor ? (
      <SearchItem
        className={cx('job-suggested-similar-jobs__search--alternative-bg')}
        tag={tagDefaultAnchor}
        url={urlDefaultAnchor}
        icon={ArrowRightWhite}
      />
    ) : null
  }
  const showMoreOption = similarJobsCard.length > maxItemsToShow
  return (
    <div className={cx('job-suggested-similar-jobs')}>
      <h3 className={cx('job-suggested-similar-jobs__title')}>{sectionTitle}</h3>
      {similarJobsCard.slice(0, maxItemsToShow).map((job, index: number) => {
        return (
          <React.Fragment key={index}>
            <SimilarCard className={cx(className)} jobUrlSlug={job.jobUrlSlug} title={job.title}>
              <Logo hideLogo={hideLogo} alt={job.title} src={job.companyLogo || NoLogo} />
              <Text className={cx('job-suggested-similar-jobs__text')} customText={similarJobTextAdapter(job)} />
              <Icon />
            </SimilarCard>
            <Divider />
          </React.Fragment>
        )
      })}
      {showMoreOption && <SearchItem className={cx('job-suggested-similar-jobs__search')} tag={tag} url={url} />}
    </div>
  )
}
