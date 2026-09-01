import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal.component'

import { OneSelectionEntry } from '@components/UI/organism'
import { listOptions } from '../../../../constants/stories/inputSelect.constants'

const selectProps = {
  dropDownTitle: 'Tipo de identificacion',
  listOptions,
  selectedValue: 1,
  placeholder: 'Tipo de identificacion',
  onChange: (e: number) => {
    console.log(e)
  }
}

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  args: {
    isOpen: true,
    onClose: () => {
      console.log('close')
    },
    title: 'Formularios de solicitud',
    description: 'Formularios de solicitud de vacantes existentes:',
    children: (
      <>
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
        <OneSelectionEntry {...selectProps} />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {}

const FocusManagementDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <button type="button">Focusable before</button>
      <button type="button" onClick={() => setIsOpen(true)}>
        Edit data
      </button>
      <button type="button">Focusable after</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edit data">
        <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Role" />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  )
}

/**
 * Opens from a real trigger so the focus management is visible: on open, focus
 * moves into the dialog; `Tab` / `Shift+Tab` stay within it; the rest of the page
 * is inert; `Escape` closes it; and on close focus returns to the trigger.
 */
export const WithFocusManagement: Story = {
  render: () => <FocusManagementDemo />
}
