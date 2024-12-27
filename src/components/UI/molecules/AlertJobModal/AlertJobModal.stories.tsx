import React, { ChangeEvent } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { AlertJobModal } from './AlertJobModal.component'
import { SearchItem, Checkbox } from '@components/UI/atoms'
import { Input } from '@components/UI/molecules'
import { ArrowRightWhite } from '@constants/icons.constants'
import styles from './AlertJobModal.module.scss'
import { withControlField } from '../../../../shared/utils/storybook/withControlField.hoc'

const { Header, Body, Button, Footer, Title, Icon } = AlertJobModal
const CheckboxWithControllerField = withControlField(Checkbox)

const meta: Meta<typeof AlertJobModal> = {
  title: 'Molecules/Alert Job Modal',
  component: AlertJobModal,
  args: {
    open: false,
    children: (
      <>
        <Header>
          <Icon />
          <Title title={'Comunicador audiovisual'} subtitle={'Crear una alerta para: '} />
        </Header>
        <Body>
          <Input
            placeholder={'Escribe tu correo'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            name={'email'}
            value={'correo@ejemplo.com'}
            hideIcon={false}
            type={'email'}
          />
          <CheckboxWithControllerField className={styles['alert-modal__checkbox']} valueNameProp="checked">
            <p>
              He leido y autorizo el{' '}
              <a href="#" target="_blank">
                tratamiento de datos personales
              </a>{' '}
              de la plataforma
            </p>
          </CheckboxWithControllerField>
          <CheckboxWithControllerField className={styles['alert-modal__checkbox']} valueNameProp="checked">
            <p>
              He leido y acepto los{' '}
              <a href="#" target="_blank">
                términos y Condiciones de uso
              </a>{' '}
              de la plataforma
            </p>
          </CheckboxWithControllerField>
        </Body>
        <Footer>
          <Button>Crear alerta</Button>
        </Footer>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof AlertJobModal>

export const Default: Story = {}

export const AlertJobModalLoginForm: Story = {
  args: {
    open: false,
    children: (
      <>
        <Header>
          <Icon />
          <Title title={'Comunicador audiovisual'} subtitle={'Crear una alerta para: '} />
        </Header>
        <Body>
          <Input
            placeholder={'Escribe tu correo'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            name={'email'}
            value={'correo@ejemplo.com'}
            hideIcon={false}
            type={'email'}
          />
          <p>Escribe tu contraseña para guardar la alerta: </p>
          <Input
            placeholder={'Escribe tu contraseña'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            name={'password'}
            value={'***********'}
            hideIcon={false}
            type={'password'}
          />
        </Body>
        <Footer>
          <SearchItem
            url={'#'}
            tag={'Crear alerta'}
            className={styles['alert-modal__searchitem']}
            icon={ArrowRightWhite}
          />
        </Footer>
      </>
    )
  }
}
