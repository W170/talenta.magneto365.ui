import { CloseCircle, SearchNormal1 } from 'iconsax-react'
import { MobileSearchbar } from './MobileSearchbar.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MobileSearchbar> = {
  title: 'Molecules/MobileSearchbar',
  component: MobileSearchbar,
  args: {
    toggleProps: {
      buttonText: '',
      buttonType: 'button',
      iconProps: {
        Icon: SearchNormal1,
        hover: false,
        color: '#000096',
        size: 16
      },
      buttonColor: 'transparent'
    },
    searchProps: {
      buttonType: 'submit',
      buttonText: '',
      iconProps: {
        Icon: SearchNormal1,
        hover: false,
        color: '#000096',
        size: 16
      },
      buttonColor: 'transparent'
    },
    removeProps: {
      buttonText: '',
      buttonType: 'button',
      iconProps: {
        Icon: CloseCircle,
        hover: false,
        color: '#14141C',
        size: 16,
        variant: 'Linear'
      },
      buttonColor: 'transparent'
    }
  }
}

export default meta

type Story = StoryObj<typeof MobileSearchbar>

export const Default: Story = {}
