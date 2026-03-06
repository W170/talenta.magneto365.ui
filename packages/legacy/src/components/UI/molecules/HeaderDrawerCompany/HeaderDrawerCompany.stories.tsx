import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerCompany } from './HeaderDrawerCompany.components'
import { LogoCompany, flag, logoProps } from '@constants/stories'

const meta: Meta<typeof HeaderDrawerCompany> = {
  title: 'Molecules/Header Drawer Company',
  component: HeaderDrawerCompany,
  args: {
    logoProps: logoProps,
    logoCompany: LogoCompany,
    logoCompanyAlt: 'Logo Sura',
    flag,
    flagAlt: 'Colombia'
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerCompany>

export const Default: Story = {}
