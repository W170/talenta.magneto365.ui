import { ICandidateActivity } from '@components/UI/organism/CandidateActivity'

export const candidateActivity: ICandidateActivity = {
  candidateDetail: {
    vacancyOrigin: {
      size: 'md',
      weight: 'black',
      color: 'lightGray',
      value: 'Aplicacion desde',
      data: 'Sep 2024'
    },
    date: {
      size: 'md',
      weight: 'normal',
      color: 'lightGray',
      value: 'Fecha',
      data: 'Sep 2024'
    },
    currentProcess: {
      size: 'md',
      weight: 'normal',
      color: 'black',
      value: 'Proceso actual',
      data: 'Sep 2024'
    },
    otherProcesses: {
      size: 'md',
      weight: 'normal',
      color: 'black',
      value: 'Otros procesos',
      data: 'Sep 2024'
    },
    process: [
      {
        title: {
          size: 'md',
          weight: 'bold',
          color: 'black',
          value: 'Proceso actual',
          data: 'Sep 2024'
        },
        vacancyDetail: [
          {
            title: {
              value: 'Consultor Rrhh',
              size: 'md',
              weight: 'bold',
              color: 'black'
            },
            status: {
              value: 'Activo',
              size: 'sm',
              weight: 'normal',
              color: 'green'
            },
            date: {
              value: 'Septiembre 2024',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            origin: {
              value: 'Jobsite Empleos y vacantes',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            stage: {
              value: 'Etapa: Prueba técnica',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            children: [
              {
                stageDetail: {
                  title: {
                    size: 'md',
                    weight: 'bold',
                    color: 'black',
                    value: 'Etapa: prueba tecnica'
                  },
                  date: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'Sep 2024 | 4:15px'
                  },
                  email: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'correo@correo'
                  },
                  children: {
                    children: [
                      {
                        size: 'md',
                        weight: 'bold',
                        color: 'black',
                        value: 'Etapa: prueba tecnica'
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      {
        title: {
          size: 'md',
          weight: 'bold',
          color: 'black',
          value: 'Otros procesos',
          data: 'Sep 2024'
        },
        vacancyDetail: [
          {
            title: {
              value: 'Consultor Rrhh',
              size: 'md',
              weight: 'bold',
              color: 'black'
            },
            status: {
              value: 'Descartado',
              size: 'sm',
              weight: 'normal',
              color: 'red'
            },
            date: {
              value: 'Septiembre 2024',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            origin: {
              value: 'Jobsite Empleos y vacantes',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            stage: {
              value: 'Etapa: Prueba técnica',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            children: [
              {
                stageDetail: {
                  title: {
                    size: 'md',
                    weight: 'bold',
                    color: 'black',
                    value: 'Etapa: prueba tecnica'
                  },
                  date: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'Sep 2024 | 4:15px'
                  },
                  email: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'correo@correo'
                  },
                  children: {
                    children: [
                      {
                        size: 'md',
                        weight: 'bold',
                        color: 'black',
                        value: 'Etapa: prueba tecnica'
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            title: {
              value: 'Consultor Rrhh',
              size: 'md',
              weight: 'bold',
              color: 'black'
            },
            status: {
              value: 'Descartado',
              size: 'sm',
              weight: 'normal',
              color: 'red'
            },
            date: {
              value: 'Septiembre 2024',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            origin: {
              value: 'Jobsite Empleos y vacantes',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            stage: {
              value: 'Etapa: Prueba técnica',
              size: 'xs',
              weight: 'normal',
              color: 'lightGray'
            },
            children: [
              {
                stageDetail: {
                  title: {
                    size: 'md',
                    weight: 'bold',
                    color: 'black',
                    value: 'Etapa: prueba tecnica'
                  },
                  date: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'Sep 2024 | 4:15px'
                  },
                  email: {
                    size: 'xs',
                    weight: 'normal',
                    color: 'black',
                    value: 'correo@correo'
                  },
                  children: {
                    children: [
                      {
                        size: 'md',
                        weight: 'bold',
                        color: 'black',
                        value: 'Etapa: prueba tecnica'
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
