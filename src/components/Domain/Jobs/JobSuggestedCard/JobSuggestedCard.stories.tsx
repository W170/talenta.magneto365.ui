import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IconItem } from '@components/UI/atoms/Icon'
import { LogoutIcon } from '@constants/icons.constants'
import { Typography } from '@components/UI/atoms/Typography'
import { JobSuggestedCard } from './JobSuggestedCard.component'

const { Section, Button } = JobSuggestedCard

const meta: Meta<typeof JobSuggestedCard> = {
  title: 'Organism/Job Suggested Card',
  component: JobSuggestedCard,
  args: {
    children: (
      <>
        <Section>
          <IconItem icon={LogoutIcon} size={40} />
          <Typography.Title>Job Title</Typography.Title>
        </Section>
        <Section>
          <Typography.Text>One</Typography.Text>
          <Typography.Text>One</Typography.Text>
          <Typography.Text>One</Typography.Text>
        </Section>
        <Section aligned="center">
          <Button variant="secondary">Ver detalles</Button>
          <Button>Aplicar</Button>
        </Section>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof JobSuggestedCard>

export const Default: Story = {}
