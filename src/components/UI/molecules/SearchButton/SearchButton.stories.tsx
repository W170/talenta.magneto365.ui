import { Meta, StoryObj } from '@storybook/react'
import { SearchButton } from './SearchButton.component'
import { MobileSearchbarButtonProps } from '../../../../constants/stories/headers.constants'

const meta: Meta<typeof SearchButton> = {
  title: 'Molecules/SearButton',
  component: SearchButton,
  args: {
    ...MobileSearchbarButtonProps
  }
}

export default meta

type Story = StoryObj<typeof SearchButton>

export const Default: Story = {}
