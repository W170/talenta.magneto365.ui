import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertsPanel } from './AlertsPanel.component'
const alerts = [
  {
    id: 1,
    text: 'Comunicador Audiovisual'
  },
  {
    id: 2,
    text: 'Servicio al cliente'
  },
  {
    id: 3,
    text: 'Ventas'
  }
]
const { Item, List } = AlertsPanel
const meta: Meta<typeof AlertsPanel> = {
  title: 'Organism/Alert Panel',
  component: AlertsPanel,
  args: {
    title: 'Tus alertas de empleo:',
    children: (
      <>
        <List>
          {alerts.map(({ id, text }) => (
            <Item key={id} text={text} onDelete={() => console.log('Test')} />
          ))}
        </List>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof AlertsPanel>

export const Default: Story = {}
