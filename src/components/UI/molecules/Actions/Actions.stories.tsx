import { Meta, StoryObj } from '@storybook/react'

import { Actions } from './Actions.component'
import { ArchiveAdd, Buildings2, Export3, Share } from '@constants/icons.constants'

const meta: Meta<typeof Actions> = {
  title: 'Molecules/Actions',
  component: Actions,
  args: {}
}

export default meta

type Story = StoryObj<typeof Actions>

export const Default: Story = {
  args: {
    ButtonText: 'Aplicar',
    ActionsButtonIcons: [ArchiveAdd, Share],
    ActionsButtonEvents: [],
    ActionButtonText: ['Guardar vacante', 'Compartir'],
    ActionsAnchorIcons: [Export3, Buildings2],
    ActionsAnchorLinks: ['link1', 'link2'],
    ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
    ActionsHeader: 'Comunicador audiovisual'
  }
}
