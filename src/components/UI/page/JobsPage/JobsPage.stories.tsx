import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import JobsPage from './JobsPage.component'
import { CreateAccountCTAProps } from '../../../../constants/stories/createAccountCTA.constants'
import { frequentSearch, footerProps, emptyVacant } from '../../../../constants/stories/jobsPage.constants'
import { sortBarProps } from '../../../../constants/stories/sortBar.constants'
import { shareLinks, vacancies } from '../../../../constants/stories/vacancies.constants'
import { sideFilterProps } from '../../../../constants/stories/sideFilter.constants'
import { ISideFilter } from '../../template/SideFilter/SideFilter.interface'
import {
  CitiesLargeDetailDrawerProps,
  CompanyLogo,
  emptyResultsProps,
  paginationProps
} from '../../../../constants/stories'
import { JobDetails } from '../../organism/JobDetails'
import { JobDetailsHeader } from '../../organism/JobDetails/children/JobDetailsHeader'
import { JobDetailsActions } from '../../organism/JobDetails/children/JobDetailsActions'
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
import { Button, SaveButton, ShareButton, Typography } from '../../atoms'
import { Tooltip } from '../../molecules/Tooltip'
import { SharePopover } from '../../molecules/SharePopover'

const jobDetailsContent = (
  <JobDetails
    renderHeader={() => (
      <JobDetailsHeader title="Vacante de prueba" publishedDate="Fecha de actualización" companyIcon={CompanyLogo} />
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
      Magneto y sus empresas aliadas nunca te pedirán dinero a cambio en un proceso de selección. Ten cuidado, revisa
      bien la vacante y si ves algo sospechoso repórtalo.
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
)

const meta: Meta<typeof JobsPage> = {
  title: 'Pages/Jobs Page',
  component: JobsPage,
  args: {
    createAccountCTAProps: CreateAccountCTAProps,
    sortBarProps,
    vacantProps: vacancies,
    frequentSearchProps: frequentSearch,
    sideFilterProps: sideFilterProps as ISideFilter,
    footerProps,
    paginationProps,
    jobSelected: vacancies[0],
    setJobSelected: (id) => {
      console.log(id)
    },
    isLoading: false,
    device: 'desktop',
    emptyResultsProps,
    displayAlwaysFilter: true,
    jobDetailsContent,
    jobDetailsTitle: 'Volver'
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof JobsPage>

export const Default: Story = {}

export const LargeCities: Story = {
  args: {
    ...Default.args,
    ...CitiesLargeDetailDrawerProps
  }
}
export const EmptyResults: Story = {
  args: {
    ...Default.args,
    vacantProps: emptyVacant
  }
}
