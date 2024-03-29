import { Meta, StoryObj } from '@storybook/react'
import { FrequentSearch } from './FrequentSearch.component'
import { searchList } from '@constants/stories'

const meta: Meta<typeof FrequentSearch> = {
  title: 'Molecules/Frequent Search',
  component: FrequentSearch,
  args: {
    searchHeading: 'Empleos mas frecuentes',
    searchList,
    showLess: 'Ver menos -',
    showMore: 'Ver mas',
    showFrequentSearch: true
  }
}

export default meta

type Story = StoryObj<typeof FrequentSearch>

export const Default: Story = {
  args: {}
}
