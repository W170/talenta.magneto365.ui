import { StoryObj, Meta } from '@storybook/react'
import LoadingDots from './children/LoadingDots/LoadingDots.component'

const meta: Meta<typeof LoadingDots> = {
  title: 'Molecules/Chat/LoadingDots',
  component: LoadingDots
}
export default meta

type Story = StoryObj<typeof LoadingDots>

export const Default: Story = {
  args: {} // no necesita props
}
