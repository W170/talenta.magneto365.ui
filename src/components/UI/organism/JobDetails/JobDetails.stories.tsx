/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobDetails } from './index'
import { CompanyLogo, shareLinks } from '../../../../constants/stories'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { Typography } from '../../atoms/Typography/Typography.component'
import { JobDetailsActions } from './children/JobDetailsActions'
import { Export3, Flag, MagnetoIcon } from '../../../../constants/icons.constants'
import { Tooltip } from '../../molecules/Tooltip'
import { Button, SaveButton } from '../../atoms'
import { SharePopover } from '../../molecules/SharePopover'

const meta: Meta<typeof JobDetails> = {
  title: 'Organism/JobDetails',
  component: JobDetails,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobDetails>

export const Default: Story = {}

export const Custom: Story = {
  render() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <button onClick={() => setIsOpen((op) => !op)}>open job details</button>
        <JobDetails.Drawer isOpen={isOpen} onClose={() => setIsOpen((op) => !op)}>
          <JobDetails
            renderHeader={() => (
              <JobDetailsHeader
                title="Vacante de prueba"
                publishedDate="Fecha de actualización"
                companyIcon={CompanyLogo}
              />
            )}
          >
            <JobDetailsActions
              actionsLinkList={[
                { link: 'link1', icon: Export3, text: 'Expandir', title: 'Expandir' },
                { link: 'link2', icon: Flag, text: 'Reportar', title: 'Reportar' }
              ]}
              externalButtonApply={
                <>
                  <Button buttonText="Aplicar con Magneto" onClick={() => console.log} suffixIcon={MagnetoIcon} />
                </>
              }
            >
              <>
                <Tooltip title={'Guardar'} position="bottom">
                  <SaveButton
                    isSaved={false}
                    onClick={() => {
                      //
                    }}
                    addHover
                    buttonTitle="Guardar"
                    buttonText="Guardar"
                    isAuthenticated
                    variant={'detailed'}
                  />
                </Tooltip>
                <SharePopover
                  iconType="share"
                  buttonTitle="Compartir"
                  buttonText="Compartir"
                  onCopySuccess={() => console.log('Success')}
                  addHover
                  shareLinks={shareLinks}
                  variant="detailed"
                />
              </>
            </JobDetailsActions>
            <JobDetails.Summary>Lista de opciones</JobDetails.Summary>
            Hola Mundo
            <JobDetails.Skills
              skills={[
                { id: 1, score: 4, name: 'Trabajo en equipo' },
                { id: 2, score: 2, name: 'Liderazgo' }
              ]}
            >
              <Typography.Paragraph strong>Habilidades</Typography.Paragraph>
            </JobDetails.Skills>
            <JobDetails.Fraud renderTitle={() => '¡Ten cuidado con el fraude!'}>
              Magneto y sus empresas aliadas nunca te pedirán dinero a cambio en un proceso de selección. Ten cuidado,
              revisa bien la vacante y si ves algo sospechoso repórtalo.
              <JobDetails.Fraud.Link>Reportar Fraude</JobDetails.Fraud.Link>
            </JobDetails.Fraud>
          </JobDetails>
        </JobDetails.Drawer>
      </>
    )
  }
}
