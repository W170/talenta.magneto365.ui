import { StoryObj, Meta } from '@storybook/react'
import { CompanyLogo } from './CompanyLogo.component'
import Logo from '../../../../assets/grupo-exito-1.png'

const meta: Meta<typeof CompanyLogo> = {
  title: 'Atoms/Company Logo',
  component: CompanyLogo,
  args: {}
}

export default meta

type Story = StoryObj<typeof CompanyLogo>

export const Default: Story = {
  args: {
    companyLogoImg: Logo,
    alt: 'Grupo Exito Logo'
  }
}
