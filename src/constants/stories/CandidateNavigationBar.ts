import { ICandidateNavigationBar } from '@components/UI/molecules'
import { ArrowLeft2, Close } from '@constants/icons.constants'

export const ICandidateBarProps: ICandidateNavigationBar = {
  className: '',
  textButtonCenter: 'Siguiente Etapa',
  iconButtonLeft: Close,
  prefix: Close,
  text: 'Candidato 1 de 1',
  menuOptions: [
    {
      icon: ArrowLeft2,
      label: 'Repetir video entrevista',
      onClick: () => console.log('Menu 1')
    },
    {
      icon: ArrowLeft2,
      label: 'Separar Candidato',
      onClick: () => console.log('Menu 2')
    },
    {
      icon: ArrowLeft2,
      label: 'Compatir',
      onClick: () => console.log('Menu 3')
    },
    {
      icon: ArrowLeft2,
      label: 'Descargar',
      onClick: () => console.log('Menu 4')
    }
  ]
}
