import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobSuggestedCard } from './JobSuggestedCard.component'
import LogoIcon from '../../../../assets/noLogo.svg'
import { IconItem } from '../../atoms/Icon'
import { TypographyText } from '../../atoms/Typography/children/TypographyText/TypographyText.component'
import { TypographyTitle } from '../../atoms/Typography/children/TypographyTitle/TypographyTitle.component'

const { Section, Button } = JobSuggestedCard

const meta: Meta<typeof JobSuggestedCard> = {
  title: 'Organism/Job Suggested Card',
  component: JobSuggestedCard,
  args: {
    children: (
      <>
        <Section>
          <IconItem icon={LogoIcon} size={40} />
          <TypographyTitle>Job Title</TypographyTitle>
        </Section>
        <Section>
          <TypographyText>One</TypographyText>
          <TypographyText>One</TypographyText>
          <TypographyText>One</TypographyText>
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
