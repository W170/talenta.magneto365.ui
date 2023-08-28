import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs.component'
import { breadcrumbProps } from '../../../../constants/stories.constants'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrums',
  component: Breadcrumbs,
  args: {
    breadcrumbProps: breadcrumbProps,
    homeUrl: '/home'
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {}
