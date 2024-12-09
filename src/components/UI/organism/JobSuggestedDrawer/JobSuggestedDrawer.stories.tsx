import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobSuggestedDrawer } from './JobSuggestedDrawer.component'
import { simpleCustomText } from '@constants/stories/alertJob.constants'
import { jobCompanyHeader, SimilarJobsData } from '@constants/stories/jobSuggestedDrawer.constants'
import { AlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.component'

const { Container, Text, Icon } = AlertJobStatus

const { Header, Alert, SimilarJobs } = JobSuggestedDrawer

const meta: Meta<typeof JobSuggestedDrawer> = {
  title: 'Organism/Job Suggested Drawer',
  component: JobSuggestedDrawer,
  args: {
    isLoading: false,
    children: (
      <>
        <Header {...jobCompanyHeader} />
        <Alert>
          <Container>
            <Icon />
            <Text customText={simpleCustomText} />
          </Container>
        </Alert>
        <SimilarJobs {...SimilarJobsData} />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof JobSuggestedDrawer>

export const Default: Story = {}
