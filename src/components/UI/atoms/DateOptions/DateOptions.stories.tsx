import { Meta, StoryObj } from '@storybook/react'
import { DateOptions } from '@components/UI/atoms/DateOptions'
import { storyMonths, storyYears } from '@constants/stories/DatePicker.constants'

const meta: Meta<typeof DateOptions> = {
  title: 'Atoms/Date Options',
  component: DateOptions,
  args: {
    optionsList: storyMonths
  }
}

export default meta

type Story = StoryObj<typeof DateOptions>

export const Default: Story = {}

export const Select: Story = {
  args: {
    ...Default.args,
    selected: 1
  }
}

export const Years: Story = {
  args: {
    ...Default.args,
    optionsList: storyYears
  }
}
