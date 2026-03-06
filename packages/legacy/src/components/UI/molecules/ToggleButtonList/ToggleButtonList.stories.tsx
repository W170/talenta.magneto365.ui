import { StoryObj, Meta } from '@storybook/react'
import { ToggleButtonList } from './ToggleButtonList.component'
import { toggleButtonList } from '../../../../constants/stories/toggleButton.constants'

const meta: Meta<typeof ToggleButtonList> = {
  title: 'Molecules/Toogle Button List',
  component: ToggleButtonList,
  args: {
    list: toggleButtonList,
    onChange: (value) => console.log(value),
    currentSelect: { id: 1, name: 'hombre' }
  }
}

export default meta

type Story = StoryObj<typeof ToggleButtonList>

export const Default: Story = {
  args: {}
}
