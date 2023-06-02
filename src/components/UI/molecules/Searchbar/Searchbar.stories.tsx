import { Meta, StoryObj } from '@storybook/react'
import { Searchbar } from './Searchbar.component'
import { removePropsButton, searchPropsButton } from '../../../../constants/stories.constants'

const meta: Meta<typeof Searchbar> = {
  title: 'Molecules/Searchbar',
  component: Searchbar,
  args: {
    placeholder: 'Busca empleos por cargo o profesion',
    searchButtonProps: searchPropsButton,
    removeButtonProps: removePropsButton
  }
}

export default meta

type Story = StoryObj<typeof Searchbar>

export const Default: Story = {}
