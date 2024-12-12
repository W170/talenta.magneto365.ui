import { ICandidateOverviewProps } from '@components/UI/molecules'

export const candidateOverviewProps: ICandidateOverviewProps = {
  data: [
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Descripción del perfil' },
          descriptions: {
            children: [
              {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
              }
            ]
          }
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Información personal' },
          children: [
            {
              titles: {
                children: [{ value: 'TeleAntioquia' }]
              },
              subtitles: {
                children: [
                  { value: 'Presentador noticiero horario nocturno' },
                  { value: 'Sept 2022 - Actual', color: 'gray' }
                ]
              },
              descriptions: {
                children: [
                  {
                    value:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                  }
                ]
              }
            },
            {
              titles: {
                children: [{ value: 'Noticias CNN' }]
              },
              subtitles: {
                children: [
                  { value: 'Presentador noticiero horario nocturno' },
                  { value: 'Sept 2022 - Actual', color: 'gray' }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Estudios' },
          children: [
            {
              titles: {
                children: [{ value: 'Universidad de Antioquia' }]
              },
              subtitles: {
                children: [{ value: 'Expresión oral' }, { value: 'Enero 2022 - Sept 2022', color: 'gray', size: 'xs' }]
              },
              descriptions: {
                children: [{ value: 'Diplomado' }]
              }
            },
            {
              titles: {
                children: [{ value: 'EAFIT' }]
              },
              subtitles: {
                children: [
                  { value: 'Comunicación estratégica' },
                  { value: 'Sept 2022 - Actual', color: 'gray', size: 'xs' }
                ]
              },
              descriptions: {
                children: [{ value: 'Posgrado' }]
              }
            },
            {
              titles: {
                children: [{ value: 'Universidad de Antioquia' }]
              },
              subtitles: {
                children: [{ value: 'Comunicación' }, { value: 'Enero 2013 - Sept 2019', color: 'gray', size: 'xs' }]
              },
              descriptions: {
                children: [{ value: 'Pregrado' }]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'skills',
      children: [
        {
          title: { value: 'Habilidades' },
          children: [
            {
              id: 1,
              name: 'Software contable',
              score: 2
            },
            {
              id: 1,
              name: 'Software contable',
              score: 2
            },
            {
              id: 3,
              name: 'Software contable',
              score: 2
            }
          ]
        }
      ]
    },
    {
      type: 'tags',
      children: [
        {
          title: { value: 'Disponibilidad horaria' },
          children: [
            {
              title: { value: 'Por horas' }
            },
            {
              title: { value: 'Tiempo completo' }
            }
          ]
        }
      ]
    },
    {
      type: 'tags',
      children: [
        {
          title: { value: 'Disponibilidad para viajar' },
          children: [
            {
              title: { value: 'No' }
            }
          ]
        }
      ]
    },
    {
      type: 'tags',
      children: [
        {
          title: { value: 'Disponibilidad para trabajar en otra ciudad' },
          children: [
            {
              title: { value: 'No' }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Redes sociales' },
          children: [
            {
              subtitles: {
                direction: 'column',
                children: [
                  {
                    prefixIcon: {
                      icon: 'linkedIn'
                    },
                    value: 'www.linkedin.com/juancamiloandrade',
                    data: 'https://www.linkedin.com/juancamiloandrade'
                  },
                  {
                    prefixIcon: {
                      icon: 'facebook'
                    },
                    value: 'www.facebook.com/juancamiloandrade',
                    data: (text) => console.log(text)
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Mi hoja de vida' },
          children: [
            {
              subtitles: {
                direction: 'column',
                children: [
                  {
                    prefixIcon: {
                      icon: 'hv',
                      size: 20
                    },
                    value: 'hv-juancamiloandrade.pdf',
                    data: () => console.log('file')
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Certificaciones' },
          children: [
            {
              titles: {
                children: [{ value: 'Comunicación estratégica' }, { value: 'Enero 2023', color: 'gray', size: 'xs' }]
              },
              subtitles: {
                children: [{ value: 'EAFIT' }]
              },
              descriptions: {
                children: [
                  {
                    value: 'www.certificado.com',
                    data: 'https://www.certificado.com',
                    size: 'xs'
                  }
                ]
              }
            },
            {
              titles: {
                children: [
                  { value: 'Expresión orgal' },
                  { value: 'Enero 2023 - Enero 2028', color: 'gray', size: 'xs' }
                ]
              },
              subtitles: {
                children: [{ value: 'Universidad de Antioquia' }]
              },
              descriptions: {
                children: [
                  {
                    value: 'www.certificado.com',
                    data: 'https://www.certificado.com',
                    size: 'xs'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Reconocimientos' },
          children: [
            {
              titles: {
                children: [{ value: 'Reconocimiento 1' }, { value: 'Enero 2023', color: 'gray', size: 'xs' }]
              },
              subtitles: {
                children: [{ value: 'Universidad de Antioquia' }]
              },
              descriptions: {
                children: [
                  {
                    value: 'www.certificado.com',
                    data: 'https://www.certificado.com',
                    size: 'xs'
                  }
                ]
              }
            },
            {
              titles: {
                children: [
                  { value: 'Reconocimiento 2' },
                  { value: 'Enero 2023 - Enero 2028', color: 'gray', size: 'xs' }
                ]
              },
              subtitles: {
                children: [{ value: 'EAFIT' }]
              },
              descriptions: {
                children: [
                  {
                    value: 'www.certificado.com',
                    data: 'https://www.certificado.com',
                    size: 'xs'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      type: 'summary',
      children: [
        {
          title: { value: 'Referencias' },
          children: [
            {
              titles: {
                children: [{ value: 'María Alejandra' }]
              },
              subtitles: {
                children: [{ value: 'Teleantioquia | Directora de comunicaciones' }]
              },
              infos: {
                children: [
                  { value: 'malejandra@correo.com', separation: 'sm', prefixIcon: { icon: 'email' } },
                  { value: '+57 123 456 789', separation: 'sm', prefixIcon: { icon: 'phone' } }
                ]
              }
            }
          ],
          descriptions: {
            children: [
              {
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            ]
          }
        }
      ]
    }
  ]
}
