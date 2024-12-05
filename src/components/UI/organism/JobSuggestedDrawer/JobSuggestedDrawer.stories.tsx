import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobSuggestedDrawer } from './JobSuggestedDrawer.component'
import { IconItem } from '@components/UI/atoms'
import { simpleCustomText } from '@constants/stories/alertJob.constants'
import { Warning3D } from '@constants/icons.constants'
import { jobCompanyHeader, SimilarJobsData } from '@constants/stories/jobSuggestedDrawer.constants'
import { AlertJobStatus } from '../../molecules/AlertJobStatus/AlertJobStatus.component'

const { Container, Text } = AlertJobStatus

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
            <IconItem icon={Warning3D} size={34} alt={'Alert Icon'} />
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
