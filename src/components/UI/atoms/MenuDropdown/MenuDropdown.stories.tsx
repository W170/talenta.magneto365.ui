import React from 'react'
import { MenuDropdownProps } from '@constants/stories'
import { Meta, StoryObj } from '@storybook/react'
import MenuDropdown from './MenuDropdown.component'

const meta: Meta<typeof MenuDropdown> = {
  title: 'Atoms/Menu Dropdown',
  component: MenuDropdown,
  args: {
    ...MenuDropdownProps,
    children: (
      <>
        <span style={{ padding: '10px' }}>Item 1</span>
        <span style={{ padding: '10px' }}>Item 2</span>
        <span style={{ padding: '10px' }}>Item 3</span>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof MenuDropdown>

export const Default: Story = {}
