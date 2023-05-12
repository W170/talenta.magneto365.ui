import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerTabs } from './HeaderDrawerTabs.components'
import { IsoLogoMagneto, ListButton, LogoMagneto } from '../../../../constants/stories.constants'

const meta: Meta<typeof HeaderDrawerTabs> = {
  title: 'Molecules/Header Drawer Tabs',
  component: HeaderDrawerTabs,
  args: {
    listButton: ListButton,
    isoType: IsoLogoMagneto,
    logo: LogoMagneto,
    alt: 'Logo Magneto',
    logoSize: 100,
    spacing: 20,
    isoTypeSize: 50
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerTabs>

export const Default: Story = {}
