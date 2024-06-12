import { Meta, StoryObj } from '@storybook/react'
import CitiesDetailDrawer from './CitiesDetailDrawer.component'

const meta: Meta<typeof CitiesDetailDrawer> = {
  title: 'Molecules/Cities Detail Drawer',
  component: CitiesDetailDrawer,
  args: {}
}

export default meta

type Story = StoryObj<typeof CitiesDetailDrawer>

export const Default: Story = {
  args: {
    cities: [
      {
        name: 'Bello',
        url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-bello',
        title: 'Ofertas empleo en Bello'
      },
      {
        name: 'Copacabana',
        url: 'https://www-stg.magneto365.com/co/trabajos/ofertas-empleo-en-copacabana',
        title: 'Ofertas empleo en Copacabana'
      }
    ]
  }
}
