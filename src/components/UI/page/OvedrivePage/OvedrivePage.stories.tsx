import { Meta, StoryObj } from '@storybook/react'
import OverdrivePage from './OvedrivePage.component'
import { headerChilds } from '@constants/stories/overdrivePage.constants'
import { collectionSectionProps, collectionSectionProps2 } from '@constants/stories/collectionSection.constants'

const meta: Meta<typeof OverdrivePage> = {
  title: 'pages/Overdrive page',
  component: OverdrivePage,
  args: {
    header: { ...headerChilds },
    collectionSection: [{ ...collectionSectionProps }, { ...collectionSectionProps2 }]
  }
}
export default meta

type Story = StoryObj<typeof OverdrivePage>

export const Default: Story = {}
