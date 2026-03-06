import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ApplicationSummary } from './ApplicationSummary.component'
import { Divider } from '../../atoms/Divider'
import { Alert } from '../../molecules/Alert'
import CheckedIcon from '../../../../assets/Checked.svg'
import Arrow from '../../../../assets/ArrowRightWhite.svg'

const { Section, Title, SubTitle, Button, Text } = ApplicationSummary

const meta: Meta<typeof ApplicationSummary> = {
  title: 'Organism/Application Summary',
  component: ApplicationSummary,
  args: {
    open: true,
    onClose: () => ({}),
    children: (
      <>
        <Section>
          <img src={CheckedIcon} alt="logo" style={{ width: '50px' }} />
          <Title>Se ha enviado tu aplicación</Title>
        </Section>
        <Section>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Almacenes_exito_logo.svg"
            alt="logo"
            style={{ width: '50px' }}
          />
          <div>
            <SubTitle>Comunicador audiovisual</SubTitle>
            <Text>Grupo Éxito</Text>
          </div>
        </Section>
        <Divider spacing={15} />
        <Alert
          text="Destaca entre los otros candidatos completando los datos del nivel 3. En este nivel podrás compartir o descargar tu hoja de vida en formato PDF."
          type="info"
        />
        <Section aligned="end">
          <Button variant="secondary">Cerrar</Button>
          <Button>
            Destacar perfil
            <img src={Arrow} alt="Arrow" />
          </Button>
        </Section>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof ApplicationSummary>

export const Default: Story = {}
