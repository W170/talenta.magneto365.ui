import { Meta, StoryObj } from '@storybook/react'
import { HorizontalMenu } from './HorizontalMenu.component'
import { HorizontalMenuPropsOptions } from '../../../../constants/stories/horizontalMenu.constant'

const meta: Meta<typeof HorizontalMenu> = {
  title: 'Molecules/Horizontal menu',
  component: HorizontalMenu,
  args: {
    options: HorizontalMenuPropsOptions.options
  }
}

export default meta

type Story = StoryObj<typeof HorizontalMenu>

export const Default: Story = {}
