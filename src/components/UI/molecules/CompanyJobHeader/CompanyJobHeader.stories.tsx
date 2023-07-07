import { StoryObj, Meta } from '@storybook/react'
import { CompanyJobHeader } from './CompanyJobHeader.component'

import Logo from '../../../../assets/grupo-exito-1.png'

const meta: Meta<typeof CompanyJobHeader> = {
  title: 'Molecules/Company Job Header',
  component: CompanyJobHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof CompanyJobHeader>

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
      isMobile: true
    }
  }
}
