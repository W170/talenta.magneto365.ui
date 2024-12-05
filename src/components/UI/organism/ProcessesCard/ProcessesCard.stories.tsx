import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ProcessesCard } from './ProcessesCard.component'
import { User } from '../../../../constants/icons.constants'

const { Section, Brand, Text, Title, Status, Arrow } = ProcessesCard

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
            <Title>AUXILIAR TRANSPORE ASISTENCIAL CEM</Title>
            <Text>Coomeva</Text>
            <Text>
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              289 aplicaron
            </Text>
          </div>
        </Section>

        <Status>
          <Text>16 / 02 / 2024</Text>
          <div>
            <Text>
              <img style={{ width: '16px', marginRight: '5px' }} src={User} alt="" />
              Aplicacion Enviada
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
