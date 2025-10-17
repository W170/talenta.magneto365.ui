import React, { useMemo } from 'react'
import { useMediaQuery } from '@components/hooks'
import { JobCardOptionDrawer } from './children/JobCardOptionDrawer'
import { JobCardOption } from './children/JobCardOption'
import { JobCardDesktop } from '../JobCardDesktop'
import { IJobCard } from './JobCard.interface'

const JobCard: React.FC<IJobCard> = ({ isActive = false, ...props }) => {
  const { jobOpen } = useMemo(() => {
    const jobOpen = isActive ? 'is-active' : ''
    return { jobOpen }
  }, [isActive])

  const cardProps = {
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

  return <JobCardDesktop renderRight={() => <JobCardOption menu={cardProps.menu ?? []} />} {...cardProps} />
}

export default JobCard
