import { Meta, StoryObj } from '@storybook/react'
import JobVideo from './JobVideo.component'
import { jobVideo } from '@constants/stories/jobVideo.constants'

const meta: Meta<typeof JobVideo> = {
  title: 'Molecules/Job Video',
  component: JobVideo,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobVideo>

export const Default: Story = {
  args: jobVideo
}
