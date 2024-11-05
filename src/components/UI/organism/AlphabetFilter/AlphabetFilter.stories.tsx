import { Meta, StoryObj } from '@storybook/react'

import AlphabetFilter from './AlphabetFilter.component'

const meta: Meta<typeof AlphabetFilter> = {
  title: 'Organism/Alphabet filter',
  component: AlphabetFilter,
  args: {
    title: 'Filtrar por letra inicial:',
    allActionText: 'Todas',
    onClickAction: (index, value) => console.log({ index, value })
  }
}

export default meta

type Story = StoryObj<typeof AlphabetFilter>

export const Default: Story = {}
