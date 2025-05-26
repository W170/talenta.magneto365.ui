import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ScrollableTab } from './ScrollableTab.component'
import { TabItem } from '../TabItem'

const meta: Meta<typeof ScrollableTab> = {
  title: 'Molecules/ScrollableTab',
  component: ScrollableTab,
  args: {}
}

type Story = StoryObj<typeof ScrollableTab>

export const Default: Story = {
  args: {
    children: (
      <>
        <TabItem text={'Todo'} />
        <TabItem text={'Solicitudes'} />
        <TabItem text={'Gestión de candidatos'} />
        <TabItem text={'Estados de vacante'} />
        <TabItem text={'Entrevistas'} />
        {Array.from({ length: 20 }).map((_, index) => (
          <TabItem key={`lorem-${index + 1}`} text={`Lorem ipsum ${index + 1}`} />
        ))}
      </>
    )
  }
}

export const WithCustomScrollAmount: Story = {
  args: {
    children: (
      <>
        <TabItem text={'Todo'} />
        <TabItem text={'Solicitudes'} />
        <TabItem text={'Gestión de candidatos'} />
        <TabItem text={'Estados de vacante'} />
        <TabItem text={'Entrevistas'} />
        {Array.from({ length: 20 }).map((_, index) => (
          <TabItem key={`lorem-${index + 1}`} text={`Lorem ipsum ${index + 1}`} />
        ))}
      </>
    ),
    scrollAmount: 500
  }
}

export const WithSelected: Story = {
  args: {
    children: (
      <>
        <TabItem text={'Todo'} isSelected />
        <TabItem text={'Solicitudes'} />
        <TabItem text={'Gestión de candidatos'} />
        <TabItem text={'Estados de vacante'} />
        <TabItem text={'Entrevistas'} />
        {Array.from({ length: 20 }).map((_, index) => (
          <TabItem key={`lorem-${index + 1}`} text={`Lorem ipsum ${index + 1}`} />
        ))}
      </>
    )
  }
}

export const WithDisable: Story = {
  args: {
    children: (
      <>
        <TabItem text={'Todo'} />
        <TabItem text={'Solicitudes'} />
        <TabItem text={'Gestión de candidatos'} />
        <TabItem text={'Estados de vacante'} />
        <TabItem text={'Entrevistas'} />
        {Array.from({ length: 20 }).map((_, index) => (
          <TabItem key={`lorem-${index + 1}`} text={`Lorem ipsum ${index + 1}`} isDisabled />
        ))}
      </>
    )
  }
}

export default meta
