import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MainButton } from '@components/UI/atoms'
import { MobileJobDetailsActionsBar } from './MobileJobDetailsActionsBar.component'

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
      ActionsHeader: 'Comunicador audiovisual',
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
        title: 'Compartir',
        content: 'Compartir'
      },
      copyButtonProps: {
        buttonText: 'Copiar enlace',
        onCopySuccess: () => console.log('Success'),
        shareLinks: [
          {
            title: 'Facebook',
            ariaLabel: 'Facebook',
            href: '#',
            name: 'Facebook'
          },
          {
            title: 'LinkedIn',
            ariaLabel: 'LinkedIn',
            href: '#',
            name: 'LinkedIn'
          },
          {
            title: 'X',
            ariaLabel: 'X',
            href: '#',
            name: 'X'
          }
        ]
      },
      externalButtonChild: <MainButton buttonText="Aplicar" />
    }
  }
}
