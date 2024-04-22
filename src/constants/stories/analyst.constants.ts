import {
  ArrowDownBlue,
  ArrowDownWhite,
  HambergerMenuDark,
  HeadsetBlack,
  HomeUnderline,
  LogoutBlack,
  NoLogo,
  Notification
} from '@constants/icons.constants'
import {
  IBreadcrumbs,
  ICompanyAnalyst,
  IMenuIcon,
  IUserAnalyst,
  IUserMenuDropdownAnalystProps
} from '@components/UI/molecules'
import { IHeaderAnalystProps, INavMenuAnalystProps } from '@components/UI/organism'
import { IMainButton, ILinkProps } from '@components/UI/atoms'
import { logoPropsDark } from './common.constants'

export const MenuButtonAnalystProps: IMainButton = {
  buttonType: 'button',
  buttonStyles: {
    buttonColor: 'transparent'
  },
  iconProps: {
    icon: HambergerMenuDark,
    hover: false,
    color: '#FFFFFF',
    size: 20
  }
}

export const BreadCrumbAnalystProps: IBreadcrumbs = {
  breadcrumbProps: {
    breadcrumbText: '/distributors',
    baseUrl: 'http://localhost:8080',
    breadcrumbCustomText: '/Pymes/Distribuidores',
    breadCrumbFromServer: ['Pymes', 'distributors'],
    urlFromServer: ['http://localhost:8060/pymes', 'http://localhost:8060/pymes/distributors']
  },
  homeUrl: '/pymes',
  iconProps: { icon: HomeUnderline, size: 16 }
}

export const UserAnalystProps: IUserAnalyst = {
  avatar: {
    userImage:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  name: 'Gabriel López',
  mail: 'gabriel@me.com'
}

export const CompanyAnalystProps: ICompanyAnalyst = {
  name: 'Comfama',
  subCompanies: [
    {
      name: 'Pymes',
      href: 'http://localhost:8060/pymes'
    },
    {
      name: 'Distribuidores',
      href: 'http://localhost:8060/pymes/distribuidores'
    },
    {
      name: 'Ver todos',
      href: 'http://localhost:8060/pymes/distribuidores'
    }
  ]
}

export const FirstUserMenuAnalystOptionsProps: IMenuIcon[] = [
  {
    text: 'Soporte',
    icon: HeadsetBlack
  }
]

export const LastUserMenuAnalystOptionsProps: IMenuIcon[] = [
  {
    text: 'Iniciar sesión',
    icon: LogoutBlack
  }
]

export const UserNotificationProps: ILinkProps = { iconProps: { icon: Notification, size: 20 }, href: '#' }

export const UserMenuAnalystProps: IUserMenuDropdownAnalystProps = {
  user: UserAnalystProps,
  company: CompanyAnalystProps,
  shareButtonProps: {
    buttonText: 'Invitar una empresa'
  },
  options: [
    {
      section: FirstUserMenuAnalystOptionsProps
    },
    {
      section: LastUserMenuAnalystOptionsProps
    }
  ]
}

export const HeaderAnalystProps: IHeaderAnalystProps = {
  // onMainMenuClick: () => ({}),
  className: 'magneto-ui-header-analyst',
  logoProps: logoPropsDark,
  breadCrumbProps: BreadCrumbAnalystProps,
  userMenuProps: UserMenuAnalystProps,
  userNotificationProps: UserNotificationProps
}

export const NavMenuAnalystProps: INavMenuAnalystProps = {
  path: '/test-de-aprendizaje',
  sections: [
    {
      subChildren: [
        {
          title: 'Inicio',
          data: '/inicio',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          }
        }
      ]
    },
    {
      title: 'Procesos de selección',
      subChildren: [
        {
          title: 'Solicitud de vacantes',
          data: '/solicitud-de-vacantes',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          }
        },
        {
          title: 'Vacantes',
          data: '/vacantes',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          }
        },
        {
          title: 'Catálogo de candidatos',
          data: '/catalogo-de-candidatos',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          }
        },
        {
          title: 'Recursos',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          },
          data: [
            {
              subChildren: [
                {
                  title: 'Imagenes',
                  data: '/imagenes'
                },
                {
                  title: 'Audios',
                  data: '/Audios'
                },
                {
                  title: 'Videos',
                  data: '/Videos'
                },
                {
                  title: 'Cuestionarios',
                  data: '/Cuestionarios'
                },
                {
                  title: 'Plantillas de correo',
                  data: '/plantillas-de-correo'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Información de la empresa',
      subChildren: [
        {
          title: 'Configuración',
          icons: {
            normal: ArrowDownWhite,
            active: ArrowDownBlue
          },
          data: [
            {
              subChildren: [
                {
                  title: 'General',
                  data: '/general'
                },
                {
                  title: 'Vincular empleados',
                  data: '/vinculacion-de-empleados'
                },
                {
                  title: 'Recordatorios',
                  data: '/recordatorios'
                },
                {
                  title: 'Marcas',
                  data: '/marcas'
                },
                {
                  title: 'Jobsites',
                  data: '/jobsites'
                },
                {
                  title: 'Página de referidos',
                  data: '/referidos'
                },
                {
                  title: 'Proceso de selección (etapas)',
                  data: '/proceso-de-seleccion'
                }
              ]
            },
            {
              title: 'Integraciones',
              subChildren: [
                {
                  title: 'PSW - Pruebas psicológicas',
                  data: '/psw'
                },
                {
                  title: 'CARIS - Exámenes médicos',
                  icons: {
                    normal: ArrowDownWhite,
                    active: ArrowDownBlue
                  },
                  data: [
                    {
                      title: 'Pruebas psicológicas',
                      subChildren: [
                        {
                          title: 'Todas',
                          data: '/pruebas-psicológicas'
                        },
                        {
                          title: 'Test',
                          icons: {
                            normal: ArrowDownWhite,
                            active: ArrowDownBlue
                          },
                          data: [
                            {
                              subChildren: [
                                {
                                  title: 'Test de habilidad',
                                  data: '/test-de-habilidad'
                                },
                                {
                                  title: 'Test de aprendizaje',
                                  data: '/test-de-aprendizaje'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  footer: [
    {
      title: 'Legal',
      subChildren: [
        {
          title: 'Política de tratamiento de datos personales',
          data: '#'
        },
        {
          title: 'Aviso de privacidad',
          data: '#'
        },
        {
          title: 'Términos y Condiciones',
          data: '#'
        }
      ]
    }
  ],
  country: {
    title: 'Colombia',
    icons: {
      normal: NoLogo
    }
  },
  onCountryClick: () => {
    console.log('Hi')
  }
}
