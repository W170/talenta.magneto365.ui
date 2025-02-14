import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AnalystTemplate } from './AnalystTemplate.component'
import { AnalystTemplateProps } from '@constants/stories/analyst.constants'

const meta: Meta<typeof AnalystTemplate> = {
  title: 'Template/Analyst Template',
  component: AnalystTemplate,
  args: {
    ...AnalystTemplateProps,
    children: <div style={{ padding: '20px' }}>Analyst Template</div>
  }
}

export default meta

type Story = StoryObj<typeof AnalystTemplate>

export const Default: Story = {}
