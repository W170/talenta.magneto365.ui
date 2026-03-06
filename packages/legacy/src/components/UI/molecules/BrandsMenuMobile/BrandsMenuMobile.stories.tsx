import { StoryObj, Meta } from '@storybook/react'
import BrandsMenuMobile from './BrandsMenuMobile.component'
import { brands, ourBrandsText } from '@constants/stories'

const meta: Meta<typeof BrandsMenuMobile> = {
  title: 'Molecules/Brands Menu Mobile',
  component: BrandsMenuMobile,
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
type Story = StoryObj<typeof BrandsMenuMobile>

export const Default: Story = {}
