/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { JobDetails } from './index'
import { CompanyLogo, shareLinks } from '../../../../constants/stories'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { Typography } from '../../atoms/Typography/Typography.component'
import { JobSuggestedCard } from '../JobSuggestedCard'
import { IconItem } from '../../atoms/Icon'
import Logo from '@assets/noLogo.svg'
import { JobCompanyLogo } from '../../atoms'

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
    return (
      <>
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
          <section style={{ display: 'flex' }}>
            <JobDetails.Action.Button rounded icon="share">
              boton
            </JobDetails.Action.Button>
            <JobDetails.Action.Link icon="whatsAppColor">enlace</JobDetails.Action.Link>
            <JobDetails.Action.SharePopover
              iconPopover="export3"
              buttonText="popover"
              shareButtonProps={{ onCopySuccess: () => '', icon: 'link1' }}
              shareLinks={shareLinks}
            />
          </section>
          <JobDetails.Summary
            items={[
              { icon: 'briefcase', id: 1, label: 'Label de prueba 1' },
              { icon: 'location', id: 2, label: 'Label de prueba 2' }
            ]}
          >
            Lista de opciones
          </JobDetails.Summary>
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
          <section style={{ display: 'flex' }}>
            <Typography.Paragraph strong>Compartir en:</Typography.Paragraph>
            <JobDetails.Action.Link icon="whatsAppColor" iconSize={20} />
            <JobDetails.Action.Link icon="facebookBlue" iconSize={20} />

            <JobDetails.Action.Link icon="x" iconSize={20} />
          </section>
        </JobDetails>
      </>
    )
  }
}
