import { Meta, StoryObj } from '@storybook/react'

import BrandMenu from './BrandMenu.component'
import { brands, ourBrandsText } from '@constants/stories'

const meta: Meta<typeof BrandMenu> = {
  title: 'Organism/Brand Menu',
  component: BrandMenu,
  args: {
    brandsProps: {
      brands,
      ourBrandsText
    },
    companyLogo: 'https://www.magneto365.com/wp-content/uploads/2022/07/grupo-exito.png',
    companySlug: 'grupo-exito',
    companyUrl: '#'
  }
}

export default meta

type Story = StoryObj<typeof BrandMenu>

export const Default: Story = {}
