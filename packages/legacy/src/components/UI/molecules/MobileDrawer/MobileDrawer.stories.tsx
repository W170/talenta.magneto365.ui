import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { MobileDrawer } from './MobileDrawer.component'
import { useState } from 'react'
import { CitiesLargeDetailDrawerProps } from '../../../../constants/stories/citiesDrawer.constant'

const MobileDrawerSample = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <div>
      <button type="button" onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </button>
      <MobileDrawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)}>
        <ul>
          {CitiesLargeDetailDrawerProps.cities.map(({ name }) => (
            <li style={{ margin: '10px 0' }} key={name}>
              {name}
            </li>
          ))}
        </ul>
      </MobileDrawer>
    </div>
  )
}

const meta: Meta<typeof MobileDrawer> = {
  title: 'Molecules/Mobile Drawer',
  component: MobileDrawerSample,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof MobileDrawer>

export const Default: Story = {}
