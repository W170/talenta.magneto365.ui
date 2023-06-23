import Breadcrumb from './Breadcrumb.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  args: {
    breadcrumbText: '/perfil/hoja de vida'
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}
