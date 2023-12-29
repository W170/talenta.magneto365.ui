import { Meta, StoryObj } from '@storybook/react'
import { listOptions } from '@constants/stories/inputSelect.constants'
import { OneSelectionEntry } from '.'

const meta: Meta<typeof OneSelectionEntry> = {
  title: 'Organism/One Selection Entry',
  component: OneSelectionEntry,
  args: {
    dropDownTitle: 'Tipo de identificacion',
    responsiveMenu: true,
    listOptions,
    selectedValue: 1,
    onChange: (e) => {
      console.log(e)
    }
  }
}
export default meta

type Story = StoryObj<typeof OneSelectionEntry>

export const Default: Story = {}
