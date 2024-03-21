import { Meta, StoryObj } from '@storybook/react'

import { DateDropdown } from './DateDropdown.component'

const meta: Meta<typeof DateDropdown> = {
  title: 'Atoms/Date Dropdown',
  component: DateDropdown,
  args: {
    placeholderLabel: 'Año',
    dateOptions: [
      { optionValue: 2024, optionLabel: '2024' },
      { optionValue: 2025, optionLabel: '2025' },
      { optionValue: 2026, optionLabel: '2026' },
      { optionValue: 2027, optionLabel: '2027' },
      { optionValue: 2028, optionLabel: '2028' },
      { optionValue: 2029, optionLabel: '2029' },
      { optionValue: 2030, optionLabel: '2030' },
      { optionValue: 2031, optionLabel: '2031' },
      { optionValue: 2032, optionLabel: '2032' },
      { optionValue: 2033, optionLabel: '2033' },
      { optionValue: 2034, optionLabel: '2034' },
      { optionValue: 2035, optionLabel: '2035' }
    ]
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
