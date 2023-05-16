import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerCompany } from './HeaderDrawerCompany.components'
import { LogoCompany, LogoProps, flag } from '../../../../constants/stories.constants'

const meta: Meta<typeof HeaderDrawerCompany> = {
  title: 'Molecules/Header Drawer Company',
  component: HeaderDrawerCompany,
  args: {
    logoProps: LogoProps,
    logoCompany: LogoCompany,
    logoCompanyAlt: 'Logo Sura',
    logoCompanySize: 80,
    spacing: 20,
    flag,
    flagAlt: 'Colombia'
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerCompany>

export const Default: Story = {}
