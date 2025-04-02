import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ClockLine, Users, Tag, MessageText1, Star, Id, Bell } from '@constants/icons.constants'
import { HorizontalMenu } from './HorizontalMenu.component'
import { IconItem } from '../../atoms/'

const HorizontalMenuPropsOptions = {
  options: [
    { icon: <IconItem icon={Users} size={20} />, title: 'Perfil candidato' },
    { icon: <IconItem icon={ClockLine} size={20} />, title: 'Actividad' },
    { icon: <IconItem icon={Tag} size={20} />, title: 'Etiquetas' },
    { icon: <IconItem icon={MessageText1} size={20} />, title: 'Comentarios' },
    { icon: <IconItem icon={Star} size={20} />, title: 'Valoraciones' },
    { icon: <IconItem icon={Id} size={20} />, title: 'Documentos' },
    { icon: <IconItem icon={Bell} size={20} />, title: 'Notificaciones' }
  ]
}

const meta: Meta<typeof HorizontalMenu> = {
  title: 'Molecules/Horizontal menu',
  component: HorizontalMenu,
  args: {
    options: HorizontalMenuPropsOptions.options
  },
  render: (args) => <HorizontalMenu {...args} onChange={(data) => console.log(data)} />
}

export default meta

type Story = StoryObj<typeof HorizontalMenu>

export const Default: Story = {}
