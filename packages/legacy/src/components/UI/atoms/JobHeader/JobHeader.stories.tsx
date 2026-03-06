import { StoryObj, Meta } from '@storybook/react'
import { JobHeader } from './JobHeader.component'

const meta: Meta<typeof JobHeader> = {
  title: 'Atoms/Job Header',
  component: JobHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobHeader>

export const Default: Story = {
  args: {
    offerTitle: 'Comunicador Audiovisual',
    offerCompanyName: 'Grupo Exito'
  }
}
