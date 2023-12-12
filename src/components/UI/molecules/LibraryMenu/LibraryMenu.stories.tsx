import { Meta, StoryObj } from '@storybook/react'
import { LibraryMenu } from './LibraryMenu.component'
import { carouselProps } from '@constants/stories/carousel.constants'

const meta: Meta<typeof LibraryMenu> = {
  title: 'Molecules/Library Menu',
  component: LibraryMenu,
  args: {
    title: '¡Crea tu hoja de vida y accede a miles de libros gratis!',
    values: carouselProps
  }
}
export default meta

type Story = StoryObj<typeof LibraryMenu>

export const Default: Story = {}
