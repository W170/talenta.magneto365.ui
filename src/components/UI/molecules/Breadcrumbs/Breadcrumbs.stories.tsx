import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.component'
import { BreadcrumbItem } from './Breadcrumbs.interface'
const urlParams = 'magneto-home'

const breadcrumbsProps: BreadcrumbItem[] = [
  {
    breadcrumbText: '',
    slug: 'magneto-home'
  }
]

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrums',
  component: Breadcrumbs,
  args: {
    urlParam: urlParams,
    breadcrumbsList: breadcrumbsProps
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {}

export const NormalBreadcrumb: Story = {
  args: {
    urlParam: 'busqueda-de-empleo',
    breadcrumbsList: [{ breadcrumbText: '/ Perfil / Hoja de vida', slug: 'busqueda-de-empleo' }]
  }
}

export const ActiveBreadcrumb: Story = {
  args: {
    urlParam: 'hoja-de-vida',
    breadcrumbsList: [
      { breadcrumbText: 'Perfil', slug: 'perfil' },
      {
        breadcrumbText: 'Hoja de Vida',
        slug: 'hoja-de-vida'
      }
    ]
  }
}
