import { ICandidateNavigationBar } from '@components/UI/molecules'

export const ICandidateBarProps: ICandidateNavigationBar = {
  className: '',
  textButtonCenter: 'Siguiente Etapa',
  iconButtonLeft: 'close',
  colorIconButtonLeft: 'white',
  text: 'Candidato 1 de 1',
  menuOptions: [
    {
      icon: 'videoInterview',
      color: 'dark-blue',
      label: 'Repetir video entrevista',
      onClick: () => console.log('Menu 1')
    },
    {
      icon: 'separateCandidate',
      label: 'Separar candidato',
      color: 'dark-blue',
      onClick: () => console.log('Menu 2')
    },
    {
      icon: 'share',
      label: 'Compatir',
      color: 'dark-blue',
      onClick: () => console.log('Menu 3')
    },
    {
      icon: 'download',
      label: 'Descargar',
      color: 'dark-blue',
      onClick: () => console.log('Menu 4')
    },
    {
      icon: 'contracted',
      label: 'Marcar como contratado',
      color: 'dark-blue',
      onClick: () => console.log('Menu 4')
    }
  ]
}
