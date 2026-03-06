import { Meta, StoryObj } from '@storybook/react'
import { CreateAccountCTA } from './CreateAccountCTA.component'
import { CreateAccountCTAProps } from '../../../../constants/stories/createAccountCTA.constants'

const meta: Meta<typeof CreateAccountCTA> = {
  title: 'Molecules/Create Account CTA',
  component: CreateAccountCTA,
  args: { ...CreateAccountCTAProps }
}

export default meta

type Story = StoryObj<typeof CreateAccountCTA>

export const Default: Story = {}
