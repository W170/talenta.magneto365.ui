import React from 'react'
import { TabButton } from '../TabButton'
import { ITab } from './Tab.interface'
import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ tabButtonJobs, tabButtonRecruiter, className }) => {
  const { type: typeJobs, href: hrefJobs, text: textJobs } = tabButtonJobs

  const { type: typeRecruiter, href: hrefRecruiter, text: textRecruiter } = tabButtonRecruiter

  const jobs = {
    linkProps: {
      type: typeJobs,
      href: hrefJobs,
      text: textJobs,
      textColor: '#000'
    },
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }

  const recruiter = {
    linkProps: {
      type: typeRecruiter,
      href: hrefRecruiter,
      text: textRecruiter,
      textColor: '#A3A3B5'
    },
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }

  return (
    <div className={className}>
      <TabButton {...jobs} />
      <TabButton {...recruiter} />
    </div>
  )
}

/**
 * Molecule UI for Tab
 */

export const Tab = withStyles(Component)
