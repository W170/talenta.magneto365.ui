import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.component'
import { Home2 } from 'iconsax-react'
import { BreadcrumbItem } from './Breadcrumbs.interface'

const urlParams = 'magneto-home'

const BreadcrumbList: BreadcrumbItem[] = [{ label: '', url: '#', slug: 'landing' }]

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrums',
  component: Breadcrumbs,
  args: {
    urlParam: urlParams,
    IconProps: {
      Icon: Home2,
      hover: true,
      size: 16,
      color: '#a3a3b5'
    },
    breadcrumbItems: BreadcrumbList
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {}

export const NormalBreadcrumb: Story = {
  args: {
    urlParam: 'busqueda-de-empleo',
    breadcrumbItems: [{ label: 'Busqueda de empleo', url: '#', slug: 'busqueda-de-empleo' }]
  }
}

export const ActiveBreadcrumb: Story = {
  args: {
    urlParam: 'hoja-de-vida',
    breadcrumbItems: [
      { label: 'Perfil', url: '#', slug: 'perfil' },
      {
        label: 'Hoja de Vida',
        url: '#',
        slug: 'hoja-de-vida'
      }
    ]
  }
}
