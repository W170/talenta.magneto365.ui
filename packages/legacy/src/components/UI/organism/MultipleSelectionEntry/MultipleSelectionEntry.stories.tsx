import { Meta, StoryObj } from '@storybook/react'
import { listOptionsDemo } from '@constants/stories/multipleSelection.constants'
import { MultipleSelectionEntry } from '.'

const meta: Meta<typeof MultipleSelectionEntry> = {
  title: 'Organism/Multiple Selection Entry',
  component: MultipleSelectionEntry,
  args: {
    dropDownTitle: 'Selecciona hasta 3 sectores laborales',
    placeholder: 'Busca un sector laboral',
    numberOfSelectable: 3,
    listOptions: listOptionsDemo,
    selectedValues: [1, 2],
    onChange: (e) => {
      console.log(e)
    }
  }
}
export default meta

type Story = StoryObj<typeof MultipleSelectionEntry>

export const Default: Story = {}
