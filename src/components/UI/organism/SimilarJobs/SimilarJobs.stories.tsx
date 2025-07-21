import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SimilarJobs } from '.'
import {
  moreJobsText,
  sectionTitle,
  similarVacanciesCardsProps,
  moreJobsLink,
  hideLogo
} from '@constants/stories/similarJobs.constants'

const meta: Meta<typeof SimilarJobs> = {
  title: 'Organism/Similar Jobs',
  component: SimilarJobs,
  tags: ['autodocs'],
  args: {
    moreJobsLink,
    moreJobsText,
    sectionTitle,
    hideLogo,
    similarJobsCard: similarVacanciesCardsProps
  }
}

export default meta

type Story = StoryObj<typeof SimilarJobs>

export const Default: Story = {
  render: (props) => (
    <article>
      <SimilarJobs.Title icon="all-jobs">Empleos similares</SimilarJobs.Title>
      <SimilarJobs {...props} />
      <SimilarJobs.Link>Ver todos los empleos</SimilarJobs.Link>
    </article>
  )
}

export const HideLogo: Story = {
  args: {
    hideLogo: true
  },
  render: (props) => (
    <article>
      <SimilarJobs.Title icon="all-jobs">Empleos similares</SimilarJobs.Title>
      <SimilarJobs {...props} />
      <SimilarJobs.Link>Ver todos los empleos</SimilarJobs.Link>
    </article>
  )
}
