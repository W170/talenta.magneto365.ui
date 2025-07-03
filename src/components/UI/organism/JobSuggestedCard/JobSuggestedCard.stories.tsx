import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobSuggestedCard } from './JobSuggestedCard.component'
import LogoIcon from '../../../../assets/noLogo.svg'

const { Text, Title, Section, Button, Logo } = JobSuggestedCard

const meta: Meta<typeof JobSuggestedCard> = {
  title: 'Organism/Job Suggested Card',
  component: JobSuggestedCard,
  args: {
    children: (
      <>
        <Section>
          <Logo logo={LogoIcon} />
          <Title>Job Title</Title>
        </Section>
        <Section>
          <Text>Uno</Text>
          <Text>Uno</Text>
          <Text>Uno</Text>
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
