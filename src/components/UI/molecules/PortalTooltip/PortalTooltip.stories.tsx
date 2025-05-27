import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { PortalTooltip } from './PortalTooltip.component'

const meta: Meta<typeof PortalTooltip> = {
  title: 'Molecules/Portal Tooltip',
  component: PortalTooltip,
  args: {
    children: <p style={{ textAlign: 'center' }}>Children</p>,
    title: 'saludos',
    position: 'bottom'
  }
}

type Story = StoryObj<typeof PortalTooltip>

export const Default: Story = {
  args: {}
}

export default meta
