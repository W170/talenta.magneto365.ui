import { Meta, StoryObj } from '@storybook/react'
import { HeaderTabs } from './HeaderTabs.component'
import { HeaderTabItem } from './HeaderTabs.interface'

const headerTabsProps: HeaderTabItem[] = [
  {
    tabType: 'tabTitle',
    url: '#',
    tabText: 'Empleos:'
  },
  {
    tabType: 'tabOption',
    url: '#',
    tabText: 'Sugeridos'
  },
  {
    tabType: 'tabOption',
    url: '#',
    tabText: 'Guardados'
  }
]

const headerTabsPropsWithActiveTab: HeaderTabItem[] = [
  ...headerTabsProps,
  {
    tabType: 'tabTitle',
    url: '#',
    tabText: 'Procesos:'
  },
  {
    tabType: 'tabOption',
    url: '#',
    tabText: 'Activos',
    slug: 'procesos-activos'
  },
  {
    tabType: 'tabOption',
    url: '#',
    tabText: 'Inactivos'
  }
]

const meta: Meta<typeof HeaderTabs> = {
  title: 'Molecules/HeaderTabs',
  component: HeaderTabs,
  args: {
    urlParam: 'empleos-sugeridos',
    headerTabList: headerTabsProps
  }
}

export default meta

type Story = StoryObj<typeof HeaderTabs>

export const Default: Story = {}

export const WithActiveTab: Story = {
  args: {
    ...Default.args,
    urlParam: 'procesos-activos',
    headerTabList: headerTabsPropsWithActiveTab
  }
}
