import { Meta, StoryObj } from '@storybook/react'
import { CandidateDocuments } from './CandidateDocuments.component'
import { FileDownloadLinearBlack, FileDownloadLinearDarkBlue } from '../../../../constants/icons.constants'

const meta: Meta<typeof CandidateDocuments> = {
  title: 'Molecules/CandidateDocuments',
  component: CandidateDocuments,
  args: {
    inputFileInterfaceProps: {
      onFileSelect: (files: File[]) => console.log('Archivo seleccionado:', files)
    },
    errorMessage: 'Sin documentos',
    inputFileButton: {
      text: 'carga documento',
      icon: FileDownloadLinearBlack
    },
    inputFileText: {
      text: 'El peso de tu archivo no debe ser mayor a 20mb, en formato PDF, Word, JPG o PNG.'
    },
    child: [
      {
        sectionTitle: 'Documentos del proceso actual',
        sectionChild: {
          child: [
            {
              title: 'Hoja de vida.pdf ',
              icon: FileDownloadLinearDarkBlue,
              info: 'Gabriel López | 20 / 04 / 2022 9:12 | 2MB'
            },
            {
              title: 'Diploma-universidad',
              icon: FileDownloadLinearDarkBlue,
              info: 'Alejandra García | 20 / 04 / 2022 9:12 | 2MB'
            },
            {
              title: 'Hoja de vida.pdf',
              icon: FileDownloadLinearDarkBlue,
              info: 'Gabriel López | 20 / 04 / 2022 9:12 | 2MB'
            }
          ]
        }
      },
      {
        sectionTitle: 'Documentos de otros procesos',
        sectionChild: {
          title: 'Analista de comunicaciones',
          child: [
            {
              title: 'Hoja de vida.pdf ',
              icon: FileDownloadLinearDarkBlue,
              info: 'Gabriel López | 20 / 04 / 2022 9:12 | 2MB'
            }
          ]
        }
      }
    ]
  }
}

export default meta

type Story = StoryObj<typeof CandidateDocuments>

export const Default: Story = {}
