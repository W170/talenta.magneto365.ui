import { Meta, StoryObj } from '@storybook/react'

import { Actions } from './Actions.component'
import { Buildings2, Export3 } from '@constants/icons.constants'
import { MainButton } from '@components/UI/atoms'
import React from 'react'
import { ShareButton } from '@components/UI/atoms/ShareButton'

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
    externalChild: <ShareButton buttonTitle="share" buttonText="Compartir" />,
    saveButtonProps: {
      isAuthenticated: true,
      buttonText: 'Guardar Vacante',
      isSaved: true,
      onClick: () => {
        //
      }
    },
    externalButtonChild: <MainButton buttonText="Aplicar" />
  }
}
