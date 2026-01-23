import { ICompletionAlert } from '../../components/UI/molecules/CompletionAlert/CompletionAlert.interface'

export const CompletionAlertProps: ICompletionAlert = {
  text: 'Tu perfil está listo. Puedes aplicar a las vacantes de inmediato. ',
  boldText: 'Explora las ofertas disponibles y comienza a postularte.',
  textLink: 'Ver mi perfil',
  link: 'http://localhost:8081/profile/resume',
  closable: true,
  onClose: () => console.log('CompletionAlert closed (storybook example)')
}
