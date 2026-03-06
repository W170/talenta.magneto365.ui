import { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from './'

const meta: Meta<typeof InputSearch> = {
  title: 'Atoms/Input Search',
  component: InputSearch,
  tags: ['autodocs'],
  args: {
    placeholder: 'Search something',
    onChange: (e) => e.target.value,
    searchOnClick: () => console.log('h')
  }
}

export default meta

type Story = StoryObj<typeof InputSearch>

export const Default: Story = {}
