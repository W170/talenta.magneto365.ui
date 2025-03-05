import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FileDownloadLinearBlack } from '../../../../constants/icons.constants'
import { InputFile } from './InputFile.component'
import { IconItem, Typography } from '../index'

const meta: Meta<typeof InputFile> = {
  title: 'Atoms/Input File',
  component: InputFile,
  render: () => (
    <InputFile onFileSelect={(files) => console.log('Archivo seleccionado:', files)}>
      <InputFile.Container>
        <InputFile.Button>
          <IconItem icon={FileDownloadLinearBlack} />
          <Typography.Text weight="bold" color="black" size="md">
            Carga documento
          </Typography.Text>
        </InputFile.Button>
        <div style={{ maxWidth: '300px', textAlign: 'center' }}>
          <Typography.Text weight="normal" color="black" size="xs">
            El peso de tu archivo no debe ser mayor a
          </Typography.Text>{' '}
          <Typography.Text weight={'semi-bold'} color="black" size={10}>
            20mb, en formato PDF, Word, JPG o PNG.
          </Typography.Text>
        </div>
      </InputFile.Container>
    </InputFile>
  )
}

export default meta

type Story = StoryObj<typeof InputFile>

export const Default: Story = {}
