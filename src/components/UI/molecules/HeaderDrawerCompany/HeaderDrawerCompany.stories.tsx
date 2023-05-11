import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerCompany } from './HeaderDrawerCompany.components'
import { LogoCompany, LogoMagneto, flag } from '../../../../constants/stories.constants'

const meta: Meta<typeof HeaderDrawerCompany> = {
  title: 'Molecules/Header Drawer Company',
  component: HeaderDrawerCompany,
  args: {
    logo: LogoMagneto,
    logoCompany: LogoCompany,
    alt: 'Logo Magneto',
    logoCompanyAlt: 'Logo Sura',
    logoSize: 40,
    logoCompanySize: 80,
    spacing: 20,
    flag,
    flagAlt: 'Colombia'
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerCompany>

export const Default: Story = {}
