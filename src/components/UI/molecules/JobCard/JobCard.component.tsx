import React, { useMemo } from 'react'
import { useMediaQuery } from '@components/hooks'
import { JobCardOptionDrawer } from './children/JobCardOptionDrawer'
import { JobCardOption } from './children/JobCardOption'
import { JobCardDesktop } from '../JobCardDesktop'
import { IJobCard } from './JobCard.interface'

const JobCard: React.FC<IJobCard> = ({ wasSeen = false, isActive = false, ...props }) => {
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
  const device = useMediaQuery('desktop', { md: 'mobile' })

  if (device === 'mobile') {
    return (
      <JobCardDesktop
        renderRight={() => (
          <JobCardOptionDrawer
            backText={cardProps.backText}
            menu={cardProps.menu ?? []}
            title={cardProps.title}
            company={cardProps.companyName}
          />
        )}
        {...cardProps}
      />
    )
  }

  return <JobCardDesktop renderRight={() => <JobCardOption menu={props.menu ?? []} />} {...cardProps} />
}

export default JobCard
