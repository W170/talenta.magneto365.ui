import { Meta, StoryObj } from '@storybook/react'
import { DatePickerResponsiveComponent } from './DatePickerResponsive.component'
import { DatePickerProps, MobileDatePickerProps } from '../../../../constants/stories/DatePicker.constants'

const meta: Meta<typeof DatePickerResponsiveComponent> = {
  title: 'Organism/ Date Picker Component',
  component: DatePickerResponsiveComponent,
  args: {
    datePickerProps: DatePickerProps,
    mobileDatePickerProps: MobileDatePickerProps
  }
}

export default meta

type Story = StoryObj<typeof DatePickerResponsiveComponent>

export const Default: Story = {}
