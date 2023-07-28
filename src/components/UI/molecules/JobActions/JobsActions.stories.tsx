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
    actionsListIcon: [
      { icon: ArchiveAdd, url: '' },
      { icon: Share, url: '' },
      { icon: Export3, url: '' },
      { icon: Buildings2, url: ' ' }
    ]
  }
}
