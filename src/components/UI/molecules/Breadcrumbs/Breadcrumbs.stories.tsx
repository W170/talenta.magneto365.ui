import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.component'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrums',
  component: Breadcrumbs,
  args: {
    breadcrumbText: '/empleos/busqueda/sugeridos'
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {}
