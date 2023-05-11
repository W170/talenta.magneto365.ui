import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.component'
import { Home2 } from 'iconsax-react'
import { BreadcrumbItem } from './Breadcrumbs.interface'
import { IconProps } from '../../atoms/Icon'

const urlParams = 'magneto-home'

const breadcrumbsProps: BreadcrumbItem[] = [
  {
    breadcrumbText: '',
    url: '#',
    slug: 'magneto-home'
  }
]

const iconProps: IconProps = {
  Icon: Home2,
  hover: true,
  size: 16,
  color: '#a3a3b5'
}

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrums',
  component: Breadcrumbs,
  args: {
    iconProps: iconProps,
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
    breadcrumbsList: [{ breadcrumbText: 'Busqueda de empleo', url: '#', slug: 'busqueda-de-empleo' }]
  }
}

export const ActiveBreadcrumb: Story = {
  args: {
    urlParam: 'hoja-de-vida',
    breadcrumbsList: [
      { breadcrumbText: 'Perfil', url: '#', slug: 'perfil' },
      {
        breadcrumbText: 'Hoja de Vida',
        url: '#',
        slug: 'hoja-de-vida'
      }
    ]
  }
}
