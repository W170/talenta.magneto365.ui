import { Meta, StoryObj } from '@storybook/react'
import { Searchbar } from './Searchbar.component'

const meta: Meta<typeof Searchbar> = {
  title: 'Molecules/Searchbar',
  component: Searchbar,
  args: {
    placeholder: 'Busca empleos por cargo o profesion',
    onSearch: () => ({})
  }
}

export default meta

type Story = StoryObj<typeof Searchbar>

export const Default: Story = {}
