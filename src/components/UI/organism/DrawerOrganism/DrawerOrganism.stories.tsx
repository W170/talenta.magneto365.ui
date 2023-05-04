import { Meta, StoryObj } from '@storybook/react'
import { DrawerOrganims } from './DrawerOrganism.component'

const listButton = [
  {
    color: '#FFF',
    link: '#',
    size: '11px',
    text: 'Busco empleo',
    textColor: '#000'
  },
  {
    color: '#F4F4FA',
    link: '#',
    size: '11px',
    text: 'Soy empresa',
    textColor: '#A3A3B5'
  }
]

const urlParams = 'empleos-por-empresa'

const MenuList = [
  { text: 'Todos los empleos', url: '#', slug: 'todos-los-empleos' },
  { text: 'Empleos por ciudad', url: '#', slug: 'empleos-por-ciudad' },
  { text: 'Empleos por empresa', url: '#', slug: 'empleos-por-empresa' },
  { text: 'Empleos por sector laboral', url: '#', slug: 'empleos-por-sector-laboral' },
  { text: 'Empleos por cargo profesional', url: '#', slug: 'empleos-por-cargo-profesional' },
  { text: 'Empleos mas buscandos', url: '#', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas Frecuentes', url: '#', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '#', slug: 'articulos-de-interes' }
]

import { Facebook, Instagram, Link21 } from 'iconsax-react'

const ListIcon = [
  { Icon: Facebook, url: '' },
  { Icon: Instagram, url: '' },
  { Icon: Link21, url: '' }
]

const meta: Meta<typeof DrawerOrganims> = {
  title: 'Organism/Drawer',
  component: DrawerOrganims,
  tags: ['autodocs'],
  args: { tabButton: listButton, menuList: MenuList, urlParam: urlParams, listIcon: ListIcon },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof DrawerOrganims>

export const Default: Story = {}

// export const Button: Story = {
//   args: {
//     type: 'button'
//   }
// }
