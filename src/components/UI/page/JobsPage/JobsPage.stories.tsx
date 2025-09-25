import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import JobsPage from './JobsPage.component'
import { CreateAccountCTAProps } from '../../../../constants/stories/createAccountCTA.constants'
import {
  frequentSearch,
  jobDetailsDrawer,
  mobileJobDetailsDrawer,
  footerProps,
  emptyVacant
} from '../../../../constants/stories/jobsPage.constants'
import { sortBarProps } from '../../../../constants/stories/sortBar.constants'
import { vacancies } from '../../../../constants/stories/vacancies.constants'
import { sideFilterProps } from '../../../../constants/stories/sideFilter.constants'
import { ISideFilter } from '../../template/SideFilter/SideFilter.interface'
import {
  CitiesLargeDetailDrawerProps,
  CreateCustomAlertProps,
  emptyResultsProps,
  paginationProps
} from '../../../../constants/stories'

const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  args: {
    createAccountCTAProps: CreateAccountCTAProps,
    createCustomAlertProps: CreateCustomAlertProps,
    sortBarProps,
    vacantProps: vacancies,
    jobDetailsDrawerProps: jobDetailsDrawer,
    mobileJobDetailsDrawerProps: mobileJobDetailsDrawer,
    frequentSearchProps: frequentSearch,
    sideFilterProps: sideFilterProps as ISideFilter,
    footerProps,
    paginationProps,
    jobSelected: vacancies[0],
    isLoading: false,
    device: 'desktop',
    emptyResultsProps,
    displayAlwaysFilter: true
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof JobsPage>

export const Default: Story = {}

export const LargeCities: Story = {
  args: {
    ...Default.args,
    ...CitiesLargeDetailDrawerProps
  }
}
export const EmptyResults: Story = {
  args: {
    ...Default.args,
    vacantProps: emptyVacant
  }
}
