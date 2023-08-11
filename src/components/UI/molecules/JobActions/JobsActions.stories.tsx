import { StoryObj, Meta } from '@storybook/react'
import { JobActions } from './JobActions.component'
import { ArchiveAdd, Buildings2, Export3, Share } from '../../../../constants/icons.constants'

const meta: Meta<typeof JobActions> = {
  title: 'Molecules/Job Actions',
  component: JobActions,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobActions>

const onApplyClick = () => {
  console.log(1)
}
const onSaveClick = () => {
  console.log(2)
}
const onShareClick = () => {
  console.log(3)
}

export const Default: Story = {
  args: {
    actionButtonText: 'Aplicar',
    actionsButtonIcons: [ArchiveAdd, Share],
    actionsButtonEvents: [onSaveClick, onShareClick],
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2'],
    onHandleClick: onApplyClick
  }
}
