import { StoryObj, Meta } from '@storybook/react'
import { JobCompanyLogo } from './JobCompanyLogo.component'
import { CompanyLogo } from '@constants/stories'

const meta: Meta<typeof JobCompanyLogo> = {
  title: 'Atoms/Job Company Logo',
  component: JobCompanyLogo,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobCompanyLogo>

export const Default: Story = {
  args: {
    offerCompanyLogo: CompanyLogo as unknown as JSX.Element
  }
}

export const NoLogo: Story = {
  args: {
    offerCompanyLogo: undefined
  }
}
