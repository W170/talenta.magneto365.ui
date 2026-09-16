import { IAccountSelect } from '@components/UI/molecules/AccountSelect/AccountSelect.interface'
import { AvatarProps } from './common.constants'

export const accountSelectDefaultProps: IAccountSelect = {
  profileImage: AvatarProps,
  user: {
    name: 'María',
    lastName: 'García'
  },
  emails: [
    { id: '1', email: 'maria.garcia@empresa.com', isCurrent: true },
    { id: '2', email: 'otra.cuenta@empresa.com', isCurrent: false }
  ],
  labels: {
    sectionTitle: 'Cuentas vinculadas',
    tooltips: {
      currentAccount: 'Cuenta actual',
      changeAccount: 'Cambiar a esta cuenta'
    }
  },
  onSelectAccount: () => undefined
}
