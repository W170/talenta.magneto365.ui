import { HomeUnderline, Error } from '@constants/icons.constants'
import { IBreadcrumbs, IUserAnalyst, IUserMenuWrapperAnalystProps } from '@components/UI/molecules'
import { IHeaderAnalyst, INavMenuAnalystProps, IModalAnalystProps } from '@components/UI/organism'
import { logoPropsDark } from './common.constants'
import { IAnalystTemplateProps } from '@components/UI/template'
import { EModalAnalystActionType } from '@components/UI/organism/ModalAnalyst/children'
import { EUserMenuAnalystOptionType } from '@components/UI/molecules/UserMenuAnalyst/children/UserMenuAnalystOptions/children'

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
  avatar:
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  name: 'Gabriel López',
  email: 'gabriel@me.com',
  title: 'Comfama'
}

export const UserMenuAnalystProps: IUserMenuWrapperAnalystProps = {
  user: UserAnalystProps,
  action: {
    title: 'Volver a Comfama',
    // data: '/comfama',
    data: () => console.log('Comfama'),
    icon: 'redo',
    rel: 'noopener noreferrer',
    target: '_blank',
    useQueryString: true
  },
  queryString: {
    lng: 'es-CO'
  },
  headerSections: [
    {
      children: [
        {
          title: 'Empresas vinculadas',
          subTitle: 'Administrando: Farmacias del Sur',
          data: [
            {
              children: [
                {
                  title: 'Metales sas',
                  data: '/metales-sas',
                  type: EUserMenuAnalystOptionType.HOVER,
                  suffix: [
                    {
                      title: 'Gestionar',
                      icon: 'manage',
                      data: (option: unknown) => console.log(option)
                    }
                  ]
                },
                {
                  title: 'Pollos Brosty',
                  data: '/pollos-brosty',
                  type: EUserMenuAnalystOptionType.HOVER,
                  suffix: [
                    {
                      title: 'Desvincular',
                      icon: 'unlink',
                      modal: {
                        name: 'unlink-distributor',
                        data: { obj: 123 }
                      }
                    }
                  ]
                },
                {
                  title: 'Los Perritos',
                  data: '/los-perritos',
                  type: EUserMenuAnalystOptionType.HOVER,
                  suffix: [
                    {
                      title: 'Hola',
                      icon: 'manage',
                      modal: {
                        name: 'hi-modal',
                        data: {}
                      }
                    }
                  ]
                },
                {
                  title: 'Ver todos',
                  data: '/ver-todos',
                  type: EUserMenuAnalystOptionType.UNDERLINE
                },
                /* {
                  title: 'Aún no hay empresas vinculadas',
                  type: EUserMenuAnalystOptionType.TEXT
                }, */
                {
                  title: 'Invitar empresa',
                  data: '/invitar-empresa',
                  type: EUserMenuAnalystOptionType.BUTTON,
                  icon: 'add',
                  selfQueryString: {
                    invite: 'true'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  footerSections: [
    {
      children: [
        {
          title: 'Ayudanos a mejorar',
          icon: 'helpImprove',
          data: '/ayudanos-a-mejorar',
          useQueryString: true,
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        {
          title: 'Soporte',
          icon: 'support',
          data: (option: unknown) => console.log(option)
        }
      ]
    },
    {
      children: [
        {
          title: 'Cerrar sesión',
          icon: 'logout',
          data: '/cerrar-sesion'
        }
      ]
    }
  ]
}

export const HeaderAnalystProps: IHeaderAnalyst = {
  className: 'magneto-ui-header-analyst',
  legend: 'Plan premium',
  logoProps: {
    ...logoPropsDark,
    alt: 'hola',
    href: '/inicio',
    rel: 'noreferrer',
    target: '_self'
  },
  breadCrumbProps: BreadCrumbAnalystProps,
  userMenuProps: UserMenuAnalystProps
}

export const NavMenuAnalystProps: INavMenuAnalystProps = {
  path: '/inicio',
  queryString: {
    lng: 'es-CO',
    access_token: '123'
  },
  sections: [
    {
      children: [
        {
          title: 'Inicio',
          data: '/inicio',
          icon: 'home'
        }
      ]
    },
    {
      title: 'Procesos de selección',
      children: [
        {
          title: 'Solicitud de vacantes',
          data: '/solicitud-de-vacantes',
          icon: 'requestVacancies'
        },
        {
          title: 'Vacantes',
          data: '/vacantes',
          icon: 'vacancies'
        },
        {
          title: 'Catálogo de candidatos',
          data: '/catalogo-de-candidatos',
          icon: 'candidatesCatalogue'
        },
        {
          title: 'Recursos',
          icon: 'resources',
          data: [
            {
              children: [
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
      children: [
        {
          title: 'Configuración',
          icon: 'settings',
          data: [
            {
              children: [
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
              children: [
                {
                  title: 'PSW - Pruebas psicológicas',
                  data: '/psw'
                },
                {
                  title: 'CARIS - Exámenes médicos',
                  icon: 'candidatesCatalogue',
                  data: [
                    {
                      title: 'Pruebas psicológicas',
                      children: [
                        {
                          title: 'Todas',
                          data: '/pruebas-psicológicas'
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
      children: [
        {
          title: 'Política de tratamiento de datos personales',
          data: '/politica-de-tratamiento-de-datos-personales'
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
  regions: [
    {
      lang: 'es-CO',
      flag: 'https://media-stage.magneto365.com/flags/col.svg?Expires=1714694399&Key-Pair-Id=K1VVO70ZORFDQU&Signature=fdI3ltKjm1P3Z1vNvFkxYO0mQvcKdxrbLcfsSmVZlzlVuM7-uYPUMEIwzJa6MVr3mZdKaUMIN5VKtZwEXsG0yYyqwRFaTuw9GbnYg9KNdCrrG9q7Jb-jVk1IsxAHn7DcK~Th3lW8I3f5RbHXkCnvMvP6HJfCgUhNTt78qJGEuYhFOl4Nzo119M2hQ7~2UnnaLi34IcDfONTNvkx9LS~z5nwgYMuW1trbXWYbbXb02ft~UGA3IGBiMMPyaF030VIlYtL4JUzfjlBvG9hlz1S8VTmxLx7YDK9GMJqtMfG41Q1iqb8ZsZDzGW-KnZs6nIzBDhecQWUT4EwnKSg8bHFMjg__',
      name: 'Colombia'
    },
    {
      lang: 'en-US',
      flag: 'https://media-stage.magneto365.com/flags/usa.svg?Expires=1714694399&Key-Pair-Id=K1VVO70ZORFDQU&Signature=XEXTObH580OxOBcK9XGi2mNuGIF4AtkSHywENG25XKtX19Ln48g7hZwDAGRMzdCUTijA9wq2qUcJEdScCrKxseRMTLJ-mg61Rv-dZ5gl0nMvRmMsKmr0r6qhuQYperNJVhyGzx3QvvbnuMqo7XrcD6R-g6o8G9P8hMykBSD-2hZrlLR48sD-OxgVsyIuuhNAWG-OEGZpsKOeSNSkwmS3trqPLpGE7ElhrY0Yb0-LWorA9~zEjyXVKLyhW2cEsvG~qJAdiRa4FCE7EPt-IYuB2MgXEUAM7Z92KslZLsUYsU7hJ5mwaFZbtFxvraERFd1EjkEpCHZ4rbkt82v~KrS13w__',
      name: 'Estados Unidos'
    },
    {
      lang: 'es-MX',
      flag: 'https://media-stage.magneto365.com/flags/mex.svg?Expires=1714694399&Key-Pair-Id=K1VVO70ZORFDQU&Signature=jApkK-mOhaySEg5~XbvESET40P2McTz82Q7cowNmzNXMWjf-alNZdN3Htl12FaodEtpvB9lOddIgrazI5JFQkI0oxVdTb2p7~zUeV-hGH07N6D0E104YWSY9ORNwJU7ErT82Z7~gTZaoYi4OXaHX1QfBHCGgqkdzaM4V4Qm1v4tMl68jK8uhP87fwgMDLKN2H-juIlU0m8oHR6IWfqsYf3JJ9CeyQJtMJKbCXzsidrMj-uWVtVXbiMb794b252-kqI6~yUMD8Yml4fAIB2yAzB1l0UvBpT5fjVaRN~qKMx2psmEYm~prwFeYrVCPToPK8OZ4gkAvRTm6~IfJnpEwpQ__',
      name: 'Mexico'
    }
  ],
  defaultRegion: 'es-MX',
  regionModal: {
    apply: 'Aplicar',
    cancel: 'Cancelar',
    title: 'Por favor seleccione su región'
  },
  onRegionChange: (region) => console.log(region)
}

export const ModalAnalystProps: IModalAnalystProps = {
  isOpen: true,
  handleClose: (visible) => console.log(visible),
  name: 'unlink-distributor',
  data: {},
  screens: [
    {
      key: 0,
      header: {
        title: '¿Está seguro que desea desvincularse de Comfama?',
        prefixIcon: {
          icon: 'danger',
          size: 20
        }
      },
      content: 'Tenga en cuenta que al desvincular esta empresa se perderán los datos que están registrados.',
      footer: {
        hasTopDivider: false,
        actions: [
          {
            key: 'cancel',
            title: 'Cancelar',
            loading: true,
            type: EModalAnalystActionType.GRAY,
            action: async (data) => {
              console.log(data)
              return { closeModal: true }
            }
          },
          {
            key: 'next',
            title: 'Si, desvincular',
            type: EModalAnalystActionType.RED,
            loading: true,
            prefixIcon: {
              icon: 'closeCircle',
              size: 20
            },
            action: async () => ({ step: 1 })
          }
        ]
      }
    },
    {
      key: 1,
      header: {
        title: 'Desvinculación de la empresa',
        prefixIcon: {
          icon: Error,
          size: 20
        }
      },
      content: 'Comfama fue desvinculada correctamente',
      footer: {
        hasTopDivider: false,
        actions: [
          {
            key: 'understood',
            title: 'Entendido',
            type: EModalAnalystActionType.GREEN,
            action: async () => ({ closeModal: true })
          }
        ]
      }
    }
  ]
}

export const AnalystTemplateProps: Omit<IAnalystTemplateProps, 'children'> = {
  headerProps: { ...HeaderAnalystProps },
  navigationMenuProps: { ...NavMenuAnalystProps },
  modals: [
    ModalAnalystProps,
    {
      name: 'hi-modal',
      screens: [
        {
          key: 0,
          header: {
            title: 'Hola'
          },
          content: 'Este es un mensaje de prueba.',
          footer: {
            hasTopDivider: false,
            actions: [
              {
                key: 'close',
                title: 'Cerrar',
                type: EModalAnalystActionType.GRAY,
                action: async () => ({ closeModal: true })
              }
            ]
          }
        }
      ]
    }
  ]
}
