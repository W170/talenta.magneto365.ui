import { ICustomText } from '@components/UI/atoms/Text/Text.interface'

export const customText: ICustomText[] = [
  { value: 'Esta vacante no recibe más aplicaciones.', fontWeight: 'bold', lineBreak: true },
  { value: 'Crea una alerta. Te avisaremos cuando tengamos empleos similares', fontWeight: 'normal', lineBreak: true }
]

export const simpleCustomText: ICustomText[] = [
  { value: 'Esta vacante no recibe más aplicaciones.', fontWeight: 'normal', lineBreak: true }
]
