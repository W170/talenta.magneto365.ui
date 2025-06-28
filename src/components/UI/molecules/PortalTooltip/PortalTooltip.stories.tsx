import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { PortalTooltip } from './PortalTooltip.component'

const baseArgs = {
  children: <p style={{ textAlign: 'center' }}>Children</p>,
  title: 'saludos'
}
const meta: Meta<typeof PortalTooltip> = {
  title: 'Molecules/Portal Tooltip',
  component: PortalTooltip,
  args: baseArgs
}

type Story = StoryObj<typeof PortalTooltip>

export const Default: Story = {
  args: {}
}

export const WithoutArrow: Story = {
  args: {
    ...baseArgs,
    hasArrow: false,
    offset: 2
  }
}

export const WithLeaveDelay: Story = {
  args: {
    ...baseArgs,
    leaveDelay: 2000
  }
}

export const WithCustomWidth: Story = {
  args: {
    ...baseArgs,
    width: '100px'
  }
}

export default meta
