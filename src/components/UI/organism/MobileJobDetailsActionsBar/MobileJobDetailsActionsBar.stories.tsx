import { Meta, StoryObj } from '@storybook/react'

import { MobileJobDetailsActionsBar } from './MobileJobDetailsActionsBar.component'

const onClick = () => {
  //
}

const meta: Meta<typeof MobileJobDetailsActionsBar> = {
  title: 'Organism/Mobile Job Details Actions Bar',
  component: MobileJobDetailsActionsBar,
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileJobDetailsActionsBar>

export const Default: Story = {
  args: {
    mobileActionButtonText: 'Aplicar',
    onApplyClick: onClick,
    actionsProps: {
      ActionsButtonEvents: [],
      ActionButtonText: ['Guardar vacante', 'Compartir'],
      ActionsAnchorLinks: ['link1', 'link2'],
      ActionAnchorText: ['Abrir en nueva pestana', 'Ver empresa'],
      ActionsHeader: 'Comunicador audiovisual',
      ButtonText: 'Aplicar',
      onHandleClick: onClick
    }
  }
}
