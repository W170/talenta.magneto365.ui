import { ICreateAccountCTA } from '../../components/UI/molecules/CreateAccountCTA/CreateAccountCTA.interface'

export const CreateAccountCTAProps: ICreateAccountCTA = {
  ctaClick: () => ({}),
  description: 'así podremos mostrarte ofertas de empleo ajustadas a tu perfil',
  primaryText: 'Crea una cuenta',
  secondaryText: 'Inicia sesión',
  title: 'Crea una cuenta o inicia sesión',
  isLoading: false
}
