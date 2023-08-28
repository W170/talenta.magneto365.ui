import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './'
import { MagnetoResolutionProps, RightsReservedProps, listMenuText } from '@constants/stories.constants'

const meta: Meta<typeof Footer> = {
  title: 'Template/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    followText: 'Siguenos',
    magnetoResolutionProps: MagnetoResolutionProps,
    rightsReservedProps: RightsReservedProps,
    menuFooterLink: listMenuText
  }
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
