import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { Actions } from './Actions.component'
import { Buildings2, Export3 } from '@constants/icons.constants'

const meta: Meta<typeof Actions> = {
  title: 'Molecules/Actions',
  component: Actions,
  args: {}
}

export default meta

type Story = StoryObj<typeof Actions>

export const Default: Story = {
  args: {
    ActionsHeader: 'Comunicador audiovisual',
    ActionsAnchorIcons: [Export3, Buildings2],
    ActionsAnchorLinks: ['link1', 'link2'],
    ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
    saveButtonProps: {
      isAuthenticated: true,
      buttonText: 'Guardar Vacante',
      isSaved: true,
      onClick: () => {
        //
      }
    },
    shareButtonProps: {
      buttonTitle: 'share',
      buttonText: 'Compartir',
      onCopySuccess: () => console.log('Success')
    },
    externalButtonChild: <MainButton buttonText="Aplicar" />
  }
}
