import { Meta, StoryObj } from "@storybook/react";
import {DateOptions} from "@components/UI/atoms/DateOptions/DateOptions";
import {monthOptionsValue, months, yearOptionsLabel, yearOptionsValue} from '@constants/stories/DatePicker.constants'

const storyMonths = [];
const storyYears = [];

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({optionValue: monthOptionsValue[i], optionLabel: months[i]});
}

for (let i = 0; i < Math.min(yearOptionsValue.length, yearOptionsLabel.length); i++) {
  storyYears.push({optionValue: yearOptionsValue[i], optionLabel: yearOptionsLabel[i]});
}

const meta: Meta<typeof DateOptions> = {
  title: "Atoms/Date Options",
  component: DateOptions,
  args: {
    optionsList: storyMonths,
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