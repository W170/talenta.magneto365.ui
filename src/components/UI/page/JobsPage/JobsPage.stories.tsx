import { Meta, StoryObj } from '@storybook/react'
import JobsPage from './JobsPage.component'
import { optionsMenuFilter, vacants } from '../../../../constants/stories.constants'

const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  tags: ['autodocs'],
  args: {
    filterBottomHeaderProps: {
      textButtonFilter: 'FILTROS',
      filterSummary: '280 empleos',
      openFilterDrawer: () => console.log('openFilterDrawer'),
      orderFilter: () => console.log('orderFilter'),
      filterItems: optionsMenuFilter,
      textOrderFilter: 'Fecha de publicación',
      setFilter: (menuItem: { key: string }) => console.log(menuItem.key),
      orderByText: 'Organizar por'
    },
    vacantProps: vacants
  }
}

export default meta

type Story = StoryObj<typeof JobsPage>

export const Default: Story = {}
