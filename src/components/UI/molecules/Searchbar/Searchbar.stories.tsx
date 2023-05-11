import { Meta, StoryObj } from '@storybook/react'
import { Searchbar } from './Searchbar.component'
import { SearchNormal1, CloseCircle } from 'iconsax-react'

const meta: Meta<typeof Searchbar> = {
  title: 'Molecules/Searchbar',
  component: Searchbar,
  args: {
    placeholder: 'Busca empleos por cargo o profesion',
    searchProps: {
      buttonType: 'submit',
      buttonText: '',
      iconProps: {
        Icon: SearchNormal1,
        hover: false,
        color: '#000096',
        size: 18
      }
    },
    removeProps: {
      buttonText: '',
      buttonType: 'button',
      iconProps: {
        Icon: CloseCircle,
        hover: false,
        color: '#14141C',
        size: 18,
        variant: 'Linear'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Searchbar>

export const Default: Story = {}
