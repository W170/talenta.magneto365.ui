import { Meta, StoryObj } from '@storybook/react'
import { BrandsMenuPopover } from './'
import { brands, ourBrandsText } from '../../../../constants/stories.constants'

const meta: Meta<typeof BrandsMenuPopover> = {
  title: 'Molecules/Brands Menu Popover',
  component: BrandsMenuPopover,
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

type Story = StoryObj<typeof BrandsMenuPopover>

export const Default: Story = {}
