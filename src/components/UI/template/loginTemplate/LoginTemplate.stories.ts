import { Meta, StoryObj } from '@storybook/react'
import { LoginTemplate } from './LoginTemplate.component'

const meta: Meta<typeof LoginTemplate> = {
  title: 'Template/Login',
  component: LoginTemplate,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof LoginTemplate>

export const Default: Story = {}