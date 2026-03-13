import { Meta, StoryObj } from '@storybook/react'
import { BrandsContainer } from './'
import { brands, ourBrandsText } from '@constants/stories'

const meta: Meta<typeof BrandsContainer> = {
  title: 'Legacy/Molecules/Brands Container',
  component: BrandsContainer,
  args: {
    brands,
    ourBrandsText,
    closeBrands: () => ({})
  }
}

export default meta

type Story = StoryObj<typeof BrandsContainer>

export const Default: Story = {}
