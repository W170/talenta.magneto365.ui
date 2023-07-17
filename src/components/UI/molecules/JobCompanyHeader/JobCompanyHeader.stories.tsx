import { StoryObj, Meta } from '@storybook/react'
import { JobCompanyHeader } from './JobCompanyHeader.component'

import Logo from '../../../../assets/grupo-exito-1.png'

const meta: Meta<typeof JobCompanyHeader> = {
  title: 'Molecules/Company Job Header',
  component: JobCompanyHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobCompanyHeader>

export const Default: Story = {
  args: {
    companyLogoProps: {
      companyLogoImg: Logo,
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
