import { Meta, StoryObj } from '@storybook/react'
import { InputFile } from './InputFile.component'
import React from 'react'
import { FileDownloadLinearBlack } from '../../../../constants/icons.constants'

const { Text, Button } = InputFile

const meta: Meta<typeof InputFile> = {
  title: 'Atoms/Input File',
  component: InputFile,
  args: {
    onFileSelect: (files) => console.log('Archivo seleccionado:', files),
    children: (
      <>
        <Button text="carga documento" icon={FileDownloadLinearBlack}></Button>
        <Text text="El peso de tu archivo no debe ser mayor a 20mb, en formato PDF, Word, JPG o PNG."></Text>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof InputFile>

export const Default: Story = {}
