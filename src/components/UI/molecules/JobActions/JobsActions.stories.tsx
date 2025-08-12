import { StoryObj, Meta } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { JobActions } from './JobActions.component'
import { Buildings2, Export3 } from '../../../../constants/icons.constants'

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
      },
      addHover: true,
      buttonTitle: 'Guardar'
    },
    shareButtonProps: {
      shareButtonProps: {
        icon: 'archiveAdd',
        onCopySuccess: () => null
      }
    },
    actionsAnchorIcons: [Export3, Buildings2],
    actionsAnchorLinks: ['link1', 'link2'],
    actionsAnchorTitle: ['Abrir esta oferta en otra pestaña', 'Ver empresa']
  }
}
