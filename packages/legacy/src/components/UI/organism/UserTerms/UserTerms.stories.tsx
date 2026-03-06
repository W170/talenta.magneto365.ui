import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { UserTerms } from './UserTerms.component'

const { Subtitle, Title, Check, Content, Submit, Highlight, Text, UlList } = UserTerms
const handleCheck = (value: boolean) => console.log(value)

const meta: Meta<typeof UserTerms> = {
  title: 'Organism/User Terms',
  component: UserTerms,
  args: {
    isOpen: true,
    children: (
      <>
        <Title>Hemos actualizado nuestra política de tratamiento de datos</Title>
        <Subtitle>Leela y acéptala para continuar usando Magneto</Subtitle>
        <Content>
          <Highlight>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES – MAGNETO GLOBAL S.A.S.</Highlight>
          <Highlight>1. Contexto legal</Highlight>
          <Text>
            El tratamiento de los Datos Personales se hace en cumplimiento de la normatividad aplicable en materia de
            protección de datos personales.
          </Text>
          <Text>
            La política de tratamiento de Datos Personales aquí descrita (en adelante la “Política”), será aplicable a
            cualquier relación de naturaleza legal o contractual con Clientes, Proveedores, Usuarios, Empleados y otros
            terceros cuyos datos sean objeto de Tratamiento, por parte de Magneto Global S.A.S.
          </Text>
          <Highlight>2. Responsable</Highlight>
          <Text>
            Las bases de datos objeto de la presente política son responsabilidad de Magneto Global S.A.S., identificada
            con el NIT.901.645.620-3, con dirección principal en la Carrera 43 a 5 A 113. Ed. One Plaza oficina 806,
            Medellín, correo electrónico habeasdata@magnetoglobal.com y teléfono (604) 6042328.
          </Text>
          <Text>
            Para la gestión y reclamación referente al tema de Datos Personales se nombra a Valentina Mesa González como
            encargada de dar respuesta y trámite al ejercicio de los derechos de los Titulares y de velar por el
            cumplimiento de la normativa en materia de protección de Datos Personales.
          </Text>
          <Highlight>3. Definiciones</Highlight>
          <Text>
            Los conceptos que se definen a continuación son en su esencia los contenidos en el Decreto 1377 de 2013.
          </Text>
          <UlList>
            <li>
              Autorización:Consentimiento <a href="google.com">previo, expreso e informado del Titular para llevar</a> a
              cabo el tratamiento de Datos Personales.
            </li>
            <li>
              Aviso de privacidad:Comunicación verbal o escrita generada por el Responsable, dirigida al Titular para el
              tratamiento de sus Datos Personales, mediante la cual se le informa acerca de la existencia de las
              políticas de tratamiento de información que le serán aplicables, la forma de acceder a las mismas y las
              finalidades del tratamiento que se pretende dar a los Datos Personales.
            </li>
            <li>
              Cliente: Persona, especialmente de naturaleza jurídica, que adquiere o recibe bajo alguna modalidad,
              servicios ofrecidos por MAGNETO GLOBAL S.A.S o por aquellas Compañías que encarguen la recolección y
              tratamiento de los Datos Personales bajo las finalidades encomendadas en el contrato de transmisión y/o
              transferencia. El Cliente será en ocasiones Responsable del Tratamiento de los Datos Personales,
              dependiendo del servicio que se adquiera, y podrá denominarse Aliado, asimismo se podrá denominar en los
              casos en que MAGNETO GLOBAL S.A.S. actúe como Encargado del Tratamiento.
            </li>
          </UlList>
        </Content>
        <Check onChange={handleCheck} isChecked>
          He leído y autorizo el tratamiento de mis datos personales conforme a la nueva política.
        </Check>
        <Submit isLoading>Guardar y Continuar</Submit>
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof UserTerms>

export const Default: Story = {}
