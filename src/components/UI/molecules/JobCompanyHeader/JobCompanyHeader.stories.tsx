import { StoryObj, Meta } from '@storybook/react'
import { JobCompanyHeader } from './JobCompanyHeader.component'
import { CompanyLogo } from '@constants/stories.constants'

const meta: Meta<typeof JobCompanyHeader> = {
  title: 'Molecules/Job Company Header',
  component: JobCompanyHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobCompanyHeader>

export const Default: Story = {
  args: {
    jobCompanyLogoProps: {
      companyLogoImg: CompanyLogo,
      alt: 'Grupo Exito Logo'
    },
    jobHeaderProps: {
      jobTitle: 'Comunicador Audiovisual',
      jobSubtitle: 'Grupo Exito'
    }
  }
}

export const Responsive: Story = {
  args: {
    ...Default.args,
    jobHeaderProps: {
      ...Default.args?.jobHeaderProps,
      isHidden: true
    }
  }
}
