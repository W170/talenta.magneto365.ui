import { StoryObj, Meta } from '@storybook/react'
import { JobActions } from './JobActions.component'
import { ArchiveAdd, Buildings2, Export3, Share } from '../../../../constants/icons.constants'

const meta: Meta<typeof JobActions> = {
  title: 'Molecules/Jobs Actions',
  component: JobActions,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobActions>

export const Default: Story = {
  args: {
    actionButtonText: 'Aplicar',
    actionsListIcon: [
      { Icon: ArchiveAdd, url: '' },
      { Icon: Share, url: '' },
      { Icon: Export3, url: '' },
      { Icon: Buildings2, url: ' ' }
    ]
  }
}
