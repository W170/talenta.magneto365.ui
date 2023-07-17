import { StoryObj, Meta } from '@storybook/react'
import { JobCompanyLogo } from './JobCompanyLogo.component'
import Logo from '../../../../assets/grupo-exito-1.png'

const meta: Meta<typeof JobCompanyLogo> = {
  title: 'Atoms/Company Logo',
  component: JobCompanyLogo,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobCompanyLogo>

export const Default: Story = {
  args: {
    companyLogoImg: Logo,
    alt: 'Grupo Exito Logo'
  }
}
