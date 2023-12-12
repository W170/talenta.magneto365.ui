import { Meta, StoryObj } from '@storybook/react'
import CollectionSection from './CollectionSection.component'
import { collectionSectionProps } from '@constants/stories/collectionSection.constants'

const meta: Meta<typeof CollectionSection> = {
  title: 'Organism/Collection Section',
  component: CollectionSection,
  args: {
    ...collectionSectionProps
  }
}
export default meta

type Story = StoryObj<typeof CollectionSection>

export const Default: Story = {}
