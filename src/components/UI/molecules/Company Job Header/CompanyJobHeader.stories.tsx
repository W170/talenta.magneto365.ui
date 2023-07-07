import { StoryObj, Meta } from '@storybook/react'
import Logo from '../../../../assets/grupo-exito-1.png'

import { CompanyJobHeader } from './CompanyJobHeader.component'

const meta: Meta<typeof CompanyJobHeader> = {
  title: 'Atoms/Company Job Header',
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
