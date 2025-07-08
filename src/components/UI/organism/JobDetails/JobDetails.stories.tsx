/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobDetails } from './index'
import { CompanyLogo, shareLinks } from '../../../../constants/stories'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { Typography } from '../../atoms/Typography/Typography.component'
import { JobSuggestedCard } from '../JobSuggestedCard'
import { IconItem } from '../../atoms/Icon'
import Logo from '@assets/noLogo.svg'
import { JobDetailsActions } from './children/JobDetailsActions'
import {
  Export3,
  FacebookBlue,
  Flag,
  LinkedInBlue,
  MagnetoIcon,
  Share2Bold,
  SMSBlue,
  WhatsAppColor,
  X
} from '../../../../constants/icons.constants'
import { Tooltip } from '../../molecules/Tooltip'
import { Button, JobCompanyLogo, SaveButton, ShareButton } from '../../atoms'
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
              <>
                <JobDetails.JobsSuggested
                  title="Vacantes similares a la que acabaste de aplicar"
                  tag="NUEVO"
                  behavior="showcase"
                >
                  <JobSuggestedCard>
                    <JobSuggestedCard.Section>
                      <IconItem icon={Logo} size={40} />
                      <Typography.Text>Descripción de la vacante</Typography.Text>
                    </JobSuggestedCard.Section>
                    <JobSuggestedCard.Section>
                      <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
                      <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
                    </JobSuggestedCard.Section>
                  </JobSuggestedCard>
                  <JobSuggestedCard>
                    <JobSuggestedCard.Section>
                      <IconItem icon={Logo} size={40} />
                      <Typography.Text>Descripción de la vacante</Typography.Text>
                    </JobSuggestedCard.Section>
                    <JobSuggestedCard.Section>
                      <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
                      <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
                    </JobSuggestedCard.Section>
                  </JobSuggestedCard>
                  <JobSuggestedCard>
                    <JobSuggestedCard.Section>
                      <IconItem icon={Logo} size={40} />
                      <Typography.Text>Descripción de la vacante</Typography.Text>
                    </JobSuggestedCard.Section>
                    <JobSuggestedCard.Section>
                      <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
                      <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
                    </JobSuggestedCard.Section>
                  </JobSuggestedCard>
                  <JobSuggestedCard>
                    <JobSuggestedCard.Section>
                      <IconItem icon={Logo} size={40} />
                      <Typography.Text>Descripción de la vacante</Typography.Text>
                    </JobSuggestedCard.Section>
                    <JobSuggestedCard.Section>
                      <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
                      <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
                    </JobSuggestedCard.Section>
                  </JobSuggestedCard>
                  <JobSuggestedCard>
                    <JobSuggestedCard.Section>
                      <IconItem icon={Logo} size={40} />
                      <Typography.Text>Descripción de la vacante</Typography.Text>
                    </JobSuggestedCard.Section>
                    <JobSuggestedCard.Section>
                      <JobSuggestedCard.Button variant="secondary">Ver más</JobSuggestedCard.Button>
                      <JobSuggestedCard.Button>Ver más</JobSuggestedCard.Button>
                    </JobSuggestedCard.Section>
                  </JobSuggestedCard>
                </JobDetails.JobsSuggested>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <JobCompanyLogo offerCompanyLogo={CompanyLogo} alt="company" />
                  <JobDetailsHeader title="Vacante de prueba" publishedDate="Fecha de actualización" />
                </div>
              </>
            )}
          >
            <JobDetailsActions
              actionsLinkList={[
                { link: 'link1', icon: Export3, text: 'Expandir', title: 'Expandir' },
                { link: 'link2', icon: Flag, text: 'Reportar', title: 'Reportar' }
              ]}
              actionsLinkSize={12}
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
                  buttonTitle="Compartir"
                  buttonText="Compartir"
                  onCopySuccess={() => console.log('Success')}
                  addHover
                  shareLinks={shareLinks}
                  variant="detailed"
                  icon={Share2Bold}
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
            <JobDetailsActions
              actionsLinkList={[
                { link: 'link1', icon: FacebookBlue, title: 'Facebook' },
                { link: 'link2', icon: WhatsAppColor, title: 'WhatsApp' },
                { link: 'link3', icon: LinkedInBlue, title: 'LinkedIn' },
                { link: 'link4', icon: X, title: 'X' },
                { link: 'link4', icon: SMSBlue, title: 'SMS' }
              ]}
              additionalAction={
                <Tooltip title={'Copiar enlace'} position="bottom">
                  <ShareButton icon={Share2Bold} onCopySuccess={() => console.log('Success')} addHover />
                </Tooltip>
              }
              externalButtonApply={
                <>
                  <Button buttonText="Aplicar con Magneto" onClick={() => console.log} suffixIcon={MagnetoIcon} />
                </>
              }
              actionsLinkSize={20}
            >
              <>
                <Typography.Paragraph>Compartir en: </Typography.Paragraph>
              </>
            </JobDetailsActions>
          </JobDetails>
        </JobDetails.Drawer>
      </>
    )
  }
}
