import { Meta, StoryObj } from '@storybook/react'
import { LogoComponent } from './Logo.component'
import { LogoMagneto, IsoLogoMagneto } from '../../../../constants/icons.constants'

const meta: Meta<typeof LogoComponent> = {
  title: 'Atoms/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  args: { alt: 'Logo Magneto', isoType: IsoLogoMagneto, logo: LogoMagneto, isoView: false },
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
