import { IHorizontalMenu } from '@components/UI/molecules'
import { Users, ClockLine, Tag, MessageText1, Star, Id, Bell } from '@constants/icons.constants'

export const HorizontalMenuPropsOptions: IHorizontalMenu = {
  options: [
    { icon: Users, label: 'Perfil candidato' },
    { icon: ClockLine, label: 'Actividad' },
    { icon: Tag, label: 'Etiquetas' },
    { icon: MessageText1, label: 'Comentarios' },
    { icon: Star, label: 'Valoraciones' },
    { icon: Id, label: 'Documentos' },
    { icon: Bell, label: 'Notificaciones' }
  ]
}
