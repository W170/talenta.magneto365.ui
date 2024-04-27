import {Meta, StoryObj} from "@storybook/react";

import {DateSelection} from "@components/UI/molecules/DateSelection/DateSelection.component";
import {monthOptionsValue, months} from "@constants/stories/DatePicker.constants";
import {DateOptions} from "@components/UI/atoms/DateOptions";

const storyMonths = [];

for (let i = 0; i < Math.min(monthOptionsValue.length, months.length); i++) {
  storyMonths.push({optionValue: monthOptionsValue[i], optionLabel: months[i]});
}

const meta: Meta<typeof DateSelection> = {
  title: 'Molecules/Date Selection',
  component: DateSelection,
  args: {
    isOpen: true,
    onClose: () => ({}),
    dateOptions: storyMonths,
    selectionHeader: 'Selecciona un mes',
    cancelSelection: 'Cerrar',
    applySelection: 'Seleccionar'
  }
}

export default meta

type Story = StoryObj<typeof DateOptions>

export const Default: Story = {}
