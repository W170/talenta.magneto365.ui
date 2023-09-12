import { StoryObj, Meta } from '@storybook/react'
import { JobActions } from './JobActions.component'
import { Buildings2, Export3 } from '../../../../constants/icons.constants'
import { MainButton } from '@components/UI/atoms'
import React from 'react'
import { ShareButton } from '@components/UI/atoms/ShareButton'

const meta: Meta<typeof JobActions> = {
  title: 'Molecules/Job Actions',
  component: JobActions,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobActions>

export const Default: Story = {
  args: {
    externalButtonChild: <MainButton buttonText="Aplicar" />,
    saveButtonProps: {
      isAuthenticated: true,
      isSaved: false,
      onClick: () => {
        //
      }
    },
    externalChild: <ShareButton buttonTitle="shareButton" />,
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2']
  }
}
