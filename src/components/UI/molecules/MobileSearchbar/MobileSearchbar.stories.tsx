import { Add, SearchNormal1 } from 'iconsax-react'
import { MobileSearchbar } from './MobileSearchbar.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MobileSearchbar> = {
  title: 'Molecules/Mobile Searchbar',
  component: MobileSearchbar,
  args: {
    searchProps: {
      buttonType: 'submit',
      buttonText: '',
      iconProps: {
        Icon: SearchNormal1,
        hover: false,
        color: '#A3A3B5',
        size: 16
      },
      buttonColor: 'transparent'
    },
    closeProps: {
      buttonText: '',
      buttonType: 'button',
      iconProps: {
        Icon: Add,
        hover: false,
        color: '#14141C',
        size: 25,
        variant: 'Linear'
      },
      buttonColor: 'transparent'
    }
  }
}

export default meta

type Story = StoryObj<typeof MobileSearchbar>

export const Default: Story = {}
