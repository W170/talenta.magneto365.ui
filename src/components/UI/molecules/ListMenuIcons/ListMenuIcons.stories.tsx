import { Meta, StoryObj } from '@storybook/react'
import {
  ArchiveTick,
  ClipboardClose,
  DocumentText,
  TaskSquare,
  BrifecaseTick,
  MessageQuestion,
  Setting2
} from 'iconsax-react'
import { ListMenuIcons } from './ListMenuIcons.component'

const urlParams = 'guardados'

const MenuItems = [
  {
    title: 'Empleos',
    items: [
      {
        Icon: BrifecaseTick,
        text: 'Sugeridos',
        slug: 'sugeridos',
        url: '/sugeridos'
      },
      {
        Icon: ArchiveTick,
        text: 'Guardados',
        slug: 'guardados',
        url: ''
      }
    ]
  },
  {
    title: 'Procesos',
    items: [
      {
        Icon: TaskSquare,
        text: 'Activos',
        slug: '',
        url: ''
      },
      {
        Icon: ClipboardClose,
        text: 'Inactivos',
        slug: '',
        url: ''
      }
    ]
  },
  {
    title: 'Mi cuenta',
    items: [
      {
        Icon: DocumentText,
        text: 'Hoja de vida',
        slug: '',
        url: ''
      },
      {
        Icon: Setting2,
        text: 'Configuración',
        slug: '',
        url: ''
      },
      {
        Icon: MessageQuestion,
        text: 'Ayuda',
        slug: '',
        url: ''
      }
    ]
  }
]

const meta: Meta<typeof ListMenuIcons> = {
  title: 'Molecules/List Menu Icons',
  component: ListMenuIcons,
  tags: ['autodocs'],
  args: {
    urlParam: urlParams,
    menuItems: MenuItems
  }
}

export default meta

type Story = StoryObj<typeof ListMenuIcons>

export const Default: Story = {}
