import { Meta, StoryObj } from '@storybook/react'
import { LogoComponent } from './Logo.component'
import { IsoLogoMagneto, LogoMagneto } from '../../../../constants/stories.constants'

const meta: Meta<typeof LogoComponent> = {
  title: 'Atoms/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: { alt: 'Logo Magneto', isoType: IsoLogoMagneto, logo: LogoMagneto, isoView: false, isoSize: 50, logoSize: 100 },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof LogoComponent>

export const Default: Story = {}

export const IsoLogo: Story = {
  args: {
    isoView: true
  }
}
