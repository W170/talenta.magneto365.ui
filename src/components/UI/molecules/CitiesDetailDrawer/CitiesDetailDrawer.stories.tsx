import { Meta, StoryObj } from '@storybook/react'
import CitiesDetailDrawer from './CitiesDetailDrawer.component'
import {
  CitiesDetailDrawerProps,
  CitiesDetailDrawerPropsWithoutUrl,
  CitiesDetailDrawerPropsWithoutCities
} from '@constants/stories'

const meta: Meta<typeof CitiesDetailDrawer> = {
  title: 'Molecules/Cities Detail Drawer',
  component: CitiesDetailDrawer,
  args: {}
}

export default meta

type Story = StoryObj<typeof CitiesDetailDrawer>

export const Default: Story = {
  args: {
    ...CitiesDetailDrawerProps
  }
}

export const NoRemote: Story = {
  args: {
    ...CitiesDetailDrawerProps
  }
}

export const NoUrl: Story = {
  args: {
    ...CitiesDetailDrawerPropsWithoutUrl
  }
}

export const NoCities: Story = {
  args: { ...CitiesDetailDrawerPropsWithoutCities }
}
