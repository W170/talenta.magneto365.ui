import React, { useMemo } from 'react'
import { IJobCard } from './JobCard.interface'
import { JobCardDesktop } from '../JobCardDesktop'
import { JobCardMobile } from '../JobCardMobile'
import { useMediaQuery } from '../../../hooks'
import { JobCardSkeleton } from './children'

const JobCard: React.FC<IJobCard> = ({ wasSeen = false, isActive = false, isLoading, ...props }) => {
  const { workSeen, jobOpen } = useMemo(() => {
    const workSeen = wasSeen ? 'was-seen' : ''
    const jobOpen = isActive ? 'is-active' : ''
    return { workSeen, jobOpen }
  }, [wasSeen, isActive])

  const cardProps = {
    workSeen,
    jobOpen,
    ...props
  }

  const cardResponsive = useMediaQuery(<JobCardDesktop {...cardProps} />, {
    md: <JobCardMobile {...cardProps} />
  })

  return <>{isLoading ? <JobCardSkeleton /> : cardResponsive}</>
}

export default JobCard
