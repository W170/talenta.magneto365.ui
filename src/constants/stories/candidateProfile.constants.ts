import { ICandidateOverviewProps, ICandidateProfile } from '@components/UI/molecules'
import { ICandidateTags, ICandidateComments } from '@components/UI/organism'

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

export const candidateProfile: ICandidateProfile = {
  data: {
    name: 'Sebastian',
    lastname: 'Cabal Quiroz',
    last_updated: 'Ultima actualización 26/12/2024',
    img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'Ingeniero de sistemas',
    score: '4.5'
  },
  details: [
    {
      title: {
        value: 'Información laboral',
        size: 'lg',
        weight: 'bold',
        color: 'black'
      },
      type: 'quick_access',
      children: [
        {
          direction: 'column',
          separation: 'md',
          children: [
            {
              value: 'Grupo Bolivar',
              prefixIcon: {
                icon: 'company'
              },
              size: 'sm',
              weight: 'medium',
              color: 'white',
              data: 'Empresa'
            },
            {
              value: 'Analista funcional',
              prefixIcon: {
                icon: 'role'
              },
              size: 'sm',
              weight: 'medium',
              color: 'white',
              data: 'Cargo'
            },
            {
              value: 'Interno',
              prefixIcon: {
                icon: 'position'
              },
              size: 'sm',
              weight: 'medium',
              color: 'white',
              data: 'Posición'
            }
          ]
        }
      ]
    },
    {
      title: {
        value: 'Datos personales',
        size: 'lg',
        weight: 'bold',
        color: 'green'
      },
      type: 'basic',
      children: [
        {
          direction: 'column',
          separation: 'md',
          children: [
            {
              value: 'CC 1037651011',
              prefixIcon: {
                icon: 'id'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            },
            {
              value: '14 / 08 / 1987',
              prefixIcon: {
                icon: 'calendar'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            },
            {
              value: 'Masculino, 35 años',
              prefixIcon: {
                icon: 'gender'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            },
            {
              value: 'nombre@correo.com',
              prefixIcon: {
                icon: 'email'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            },
            {
              value: '+57 3002002028',
              prefixIcon: {
                icon: 'phone'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            },
            {
              value: 'Medellín, Colombia',
              prefixIcon: {
                icon: 'location'
              },
              size: 'sm',
              weight: 'normal',
              color: 'blue'
            }
          ]
        }
      ]
    },
    {
      title: {
        value: 'Nivel de estudios',
        size: 'lg',
        weight: 'bold',
        color: 'green'
      },
      type: 'basic',
      children: [
        {
          direction: 'column',
          separation: 'md',
          children: [
            {
              value: 'Especialización / maestría',
              prefixIcon: {
                icon: 'education'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            }
          ]
        }
      ]
    },
    {
      title: {
        value: 'Aspiración salarial',
        size: 'lg',
        weight: 'bold',
        color: 'green'
      },
      type: 'basic',
      children: [
        {
          direction: 'column',
          separation: 'md',
          children: [
            {
              value: '$2.000.000',
              prefixIcon: {
                icon: 'salary'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            }
          ]
        }
      ]
    },
    {
      title: {
        value: 'Categoría',
        size: 'lg',
        weight: 'bold',
        color: 'green'
      },
      type: 'basic',
      children: [
        {
          direction: 'column',
          separation: 'md',
          children: [
            {
              value: 'Diseño',
              prefixIcon: {
                icon: 'category'
              },
              size: 'sm',
              weight: 'normal',
              color: 'white'
            }
          ]
        }
      ]
    }
  ]
}

export const candidateTagsProps: Omit<ICandidateTags, 'onAdd' | 'onRemove'> = {
  title: 'Etiquetas',
  description: 'Escribe y presiona enter para crear la etiqueta, máximo 5 palabras por etiqueta.',
  value: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4', 'Etiqueta 5'],
  inputProps: {
    placeholder: 'Etiquetas',
    buttonText: 'Guardar'
  }
}

export const candidateCommentsProps: Omit<ICandidateComments, 'onAdd'> = {
  title: 'Comentarios',
  description: 'Deja un comentario, sólo lo verán los usuarios de tu compañía.',
  value: [
    {
      title: 'Comentarios generales',
      children: [
        {
          children: [
            {
              name: 'Juan Esteban Ocampo',
              date: '15/11/2022',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            },
            {
              name: 'Juan Esteban Ocampo',
              date: '15/11/2022',
              detail: '(1 respuesta)',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            }
          ]
        }
      ]
    },
    {
      title: 'Comentarios por procesos',
      children: [
        {
          title: 'Analista de comunicaciones',
          children: [
            {
              name: 'Marcela Muñoz',
              date: '15/11/2022',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            }
          ]
        },
        {
          title: 'Analista de ecommerce',
          children: [
            {
              name: 'Juan Carlos',
              date: '15/11/2022',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
            }
          ]
        }
      ]
    }
  ],
  inputProps: {
    placeholder: 'Comentario',
    buttonText: 'Guardar'
  }
}
