import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ProcessesCard } from './ProcessesCard.component'
import { User } from '../../../../constants/icons.constants'
import { IStatusJob } from './ProcessesCard.interface'

const { Section, Brand, Text, Title, Status, Arrow, IconStatus } = ProcessesCard

const status: IStatusJob = 'Hired'
const isSelected = true

const meta: Meta<typeof ProcessesCard> = {
  title: 'Organism/Processes Card',
  component: ProcessesCard,
  args: {
    children: (
      <>
        <Section>
          <Brand
            alt="google-logo"
            src="https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc"
          />
          <div>
            <Title status="Pending">AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status="Pending">Coomeva</Text>
            <Text status="Pending">
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status="Pending">
          <Text>16 / 02 / 2024</Text>
          <div>
            <Text>
              <IconStatus status="Pending" />
              Pendiente
            </Text>
          </div>
        </Status>
        <Arrow />
      </>
    )
  }
}
export default meta

type Story = StoryObj<typeof ProcessesCard>

export const Default: Story = {}

export const Discarded: Story = {
  args: {
    children: (
      <>
        <Section>
          <Brand
            alt="google-logo"
            src="https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc"
          />
          <div>
            <Title status="Discarded">AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status="Discarded">Coomeva</Text>
            <Text status="Discarded">
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status="Discarded">
          <Text>16 / 02 / 2024</Text>
          <div>
            <Text strong={false}>
              <IconStatus status="Discarded" />
              Descartado
            </Text>
          </div>
        </Status>
        <Arrow />
      </>
    )
  }
}

export const HiredSelected: Story = {
  args: {
    isSelected,
    children: (
      <>
        <Section>
          <Brand
            alt="google-logo"
            src="https://play-lh.googleusercontent.com/QRRGW2tMZ4-FNw0XWk6WWiXHaQCGxuwM-92HrBhlA4WOd_AGmjVmQkiHyAqQjW2yByc"
          />
          <div>
            <Title status={status}>AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status={status}>Coomeva</Text>
            <Text status={status}>
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status={status}>
          <Text>16 / 02 / 2024</Text>
          <div>
            <Text strong={status === 'Hired'}>
              <IconStatus status={status} />
              Contratado
            </Text>
          </div>
        </Status>
        <Arrow />
      </>
    )
  }
}
