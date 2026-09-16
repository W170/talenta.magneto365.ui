import { Meta, StoryObj } from '@storybook/react'
import {
  CitiesLargeDetailDrawerProps,
  emptyResultsProps,
  paginationProps,
  sideFilterProps,
  sortBarProps,
  vacancies
} from '@constants/stories'
import JobsPage from './JobsPage.component'
import { emptyVacant, footerProps, frequentSearch } from '@constants/stories/jobsPage.constants'
import { ISideFilter } from '@components/UI/template'
import React from 'react'

const meta: Meta<typeof JobsPage> = {
  title: 'Domain/Jobs/Jobs Page',
  component: JobsPage,
  args: {
    sortBarProps,
    vacantProps: vacancies,
    frequentSearchProps: frequentSearch,
    sideFilterProps: sideFilterProps as ISideFilter,
    footerProps,
    paginationProps,
    jobSelected: vacancies[0],
    isLoading: false,
    device: 'desktop',
    emptyResultsProps,
    displayAlwaysFilter: true,
    jobDetailsContent: <div>Job Details Content</div>,
    renderBeforeJobsResult: () => <div>Render Before Jobs Result</div>,
    renderBelowPagination: () => <div>Render Below Pagination</div>
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
