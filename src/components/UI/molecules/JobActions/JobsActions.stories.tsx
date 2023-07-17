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

export const Default: Story = {
  args: {
    actionButtonText: 'Aplicar',
    actionsButtonIcons: [ArchiveAdd, Share],
    actionsButtonEvents: [],
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2']
  }
}
