import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { DateInput } from './DateInput'
import { withControlField } from '../../../../shared/utils/storybook/withControlField.hoc'

const meta: Meta<typeof DateInput> = {
  title: 'Atoms/Date Input',
  component: DateInput,
  args: {}
}

export default meta

type Story = StoryObj<typeof DateInput>

export const Default: Story = {}

export const InputFit: Story = {
  args: {
    fit: true
  }
}

export const InputError: Story = {
  args: {
    hasError: true
  }
}

/**
 * The DateInput component has wrapped in controlled field
 */
export const ControlledField: Story = {
  render: () => {
    const DateInputControlled = withControlField(DateInput)
    return <DateInputControlled />
  }
}
