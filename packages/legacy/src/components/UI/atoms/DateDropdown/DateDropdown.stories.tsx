import { Meta, StoryObj } from '@storybook/react'

import { DateDropdown } from '@components/UI/atoms'
import { years } from '@constants/stories/DatePicker.constants'

const meta: Meta<typeof DateDropdown> = {
  title: 'Legacy/Atoms/Date Dropdown',
  component: DateDropdown,
  args: {
    placeholderLabel: 'Año',
    dateOptions: years
  }
}

export default meta

type Story = StoryObj<typeof DateDropdown>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}
