import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MobileJobDetailsActionsBar } from './MobileJobDetailsActionsBar.component'
import { IconItem, MainButton } from '@components/UI/atoms'
import { Share } from '@constants/icons.constants'

const meta: Meta<typeof MobileJobDetailsActionsBar> = {
  title: 'Organism/Mobile Job Details Actions Bar',
  component: MobileJobDetailsActionsBar,
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileJobDetailsActionsBar>

export const Default: Story = {
  args: {
    externalButtonChild: <MainButton buttonText="Aplicar" />,
    actionsProps: {
      ActionsAnchorLinks: ['link1', 'link2'],
      ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
      ActionsHeader: 'Comunicador audiovisual',
      externalChild: <IconItem icon={Share} />,
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
}
