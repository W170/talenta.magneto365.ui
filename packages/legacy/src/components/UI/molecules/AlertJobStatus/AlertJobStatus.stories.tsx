import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertJobStatus } from './AlertJobStatus.component'
import { customText, simpleCustomText } from '@constants/stories/alertJob.constants'

const { Container, Text, Button, Icon } = AlertJobStatus

const meta: Meta<typeof AlertJobStatus> = {
  title: 'Molecules/Alert Job Status',
  component: AlertJobStatus,
  args: {
    children: (
      <>
        <Container>
          <Icon />
          <Text customText={customText} />
        </Container>
        <Button>Crear alerta</Button>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof AlertJobStatus>

export const Default: Story = {}

export const WithoutAnchorText: Story = {
  args: {
    children: (
      <>
        <Container>
          <Icon />
          <Text customText={simpleCustomText} />
        </Container>
      </>
    )
  }
}
