import React from 'react'
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
    customMaxHeight: '200px',
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
