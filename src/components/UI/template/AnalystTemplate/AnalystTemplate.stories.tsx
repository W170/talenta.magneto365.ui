import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AnalystTemplate } from './AnalystTemplate.component'
import { HeaderAnalystProps, NavMenuAnalystProps } from '@constants/stories'

const meta: Meta<typeof AnalystTemplate> = {
  title: 'Template/Analyst Template',
  component: AnalystTemplate,
  args: {
    headerProps: { ...HeaderAnalystProps },
    navigationMenuProps: { ...NavMenuAnalystProps },
    children: <div style={{ padding: '20px' }}>Analyst Template</div>
  }
}

export default meta

type Story = StoryObj<typeof AnalystTemplate>

export const Default: Story = {}
