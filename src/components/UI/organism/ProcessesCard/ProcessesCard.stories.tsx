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
            <Text>16 / 02 / 2024</Text>
            <Title status="Pending">AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status="Pending">Coomeva</Text>
            <Text status="Pending">
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status="Pending">
          <IconStatus status="Pending" color=" #CD8A04" />
          <Text>Pendiente</Text>
        </Status>
        <Arrow color=" #CD8A04" />
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
            <Text>16 / 02 / 2024</Text>
            <Title status="Discarded">AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status="Discarded">Coomeva</Text>
            <Text status="Discarded">
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status="Discarded">
          <IconStatus status="Discarded" color="#E10000" />
          <Text strong={false}>Descartado</Text>
        </Status>
        <Arrow color="#E10000" />
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
            <Text>16 / 02 / 2024</Text>
            <Title status={status}>AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text status={status}>Coomeva</Text>
            <Text status={status}>
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status isSelected={isSelected ? isSelected && status !== 'Hired' : false} status={status}>
          <IconStatus status={status} color="#098C3B" />
          <Text strong={status === 'Hired'}>Contratado</Text>
        </Status>
        <Arrow color="#098C3B" />
      </>
    )
  }
}
