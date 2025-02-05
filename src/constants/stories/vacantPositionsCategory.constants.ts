import { IButtonLink } from '@components/UI/atoms'
import { Location } from '@constants/icons.constants'
import { generateID } from '@utils/generateID/generateID.util'

export const categoriesData = [
  {
    id: 1,
    name: 'Tecnología y sistemas',
    icon: Location,
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos' },
      { id: generateID(), name: 'Administrador de Redes' }
    ],
    href: 'https://www.magneto365.com/es'
  },
  {
    id: 2,
    name: 'Ventas y servicio al cliente',
    icon: Location,
    list: [
      { id: generateID(), name: 'Asesor Comercial' },
      { id: generateID(), name: 'Ejecutivo de Ventas' },
      { id: generateID(), name: 'Representante de Servicio' }
    ]
  },
  {
    id: 3,
    name: 'Consultoría y servicios profesionales',
    icon: Location,
    list: [
      { id: generateID(), name: 'Consultor de Negocios' },
      { id: generateID(), name: 'Abogado Corporativo' },
      { id: generateID(), name: 'Asesor Financiero' }
    ]
  },
  {
    id: 4,
    name: 'Ingeniería',
    icon: Location,
    list: [
      { id: generateID(), name: 'Ingeniero Civil' },
      { id: generateID(), name: 'Ingeniero Mecánico' },
      { id: generateID(), name: 'Ingeniero Eléctrico' }
    ]
  },
  {
    id: 5,
    name: 'Oficios varios, aseo y seguridad',
    icon: Location,
    list: [
      { id: generateID(), name: 'Conserje' },
      { id: generateID(), name: 'Guardia de Seguridad' },
      { id: generateID(), name: 'Supervisor de Limpieza' }
    ]
  },
  {
    id: 6,
    name: 'Manufactura y producción',
    icon: Location,
    list: [
      { id: generateID(), name: 'Operario de Producción' },
      { id: generateID(), name: 'Supervisor de Planta' },
      { id: generateID(), name: 'Inspector de Calidad' }
    ]
  },
  {
    id: 7,
    name: 'Salud y medicina',
    icon: Location,
    list: [
      { id: generateID(), name: 'Médico General' },
      { id: generateID(), name: 'Enfermero/a' },
      { id: generateID(), name: 'Técnico en Laboratorio' }
    ]
  },
  {
    id: 8,
    name: 'Medios, arte y producción audiovisual',
    icon: Location,
    list: [
      { id: generateID(), name: 'Diseñador Gráfico' },
      { id: generateID(), name: 'Editor de Video' },
      { id: generateID(), name: 'Fotógrafo Profesional' }
    ]
  },
  {
    id: 9,
    name: 'Dirección y gerencia',
    icon: Location,
    list: [
      { id: generateID(), name: 'Gerente de Proyecto' },
      { id: generateID(), name: 'Director de Operaciones' },
      { id: generateID(), name: 'CEO / Director General' }
    ]
  },
  {
    id: 10,
    name: 'Técnicos y de mantenimiento',
    icon: Location,
    list: [
      { id: generateID(), name: 'Técnico en Refrigeración' },
      { id: generateID(), name: 'Electricista Industrial' },
      { id: generateID(), name: 'Mecánico Automotriz' }
    ]
  },
  {
    id: 11,
    name: 'Educación y docencia',
    icon: Location,
    list: [
      { id: generateID(), name: 'Profesor Universitario' },
      { id: generateID(), name: 'Docente de Secundaria' },
      { id: generateID(), name: 'Instructor de Idiomas' }
    ]
  },
  {
    id: 12,
    name: 'Construcción y oficios',
    icon: Location,
    list: [
      { id: generateID(), name: 'Maestro de Obra' },
      { id: generateID(), name: 'Albañil' },
      { id: generateID(), name: 'Plomero' }
    ]
  },
  {
    id: 13,
    name: 'Agricultura y recursos naturales',
    icon: Location,
    list: [
      { id: generateID(), name: 'Agrónomo' },
      { id: generateID(), name: 'Técnico Agropecuario' },
      { id: generateID(), name: 'Especialista en Recursos Naturales' }
    ]
  },
  {
    id: 14,
    name: 'Hotelería y turismo',
    icon: Location,
    list: [
      { id: generateID(), name: 'Gerente de Hotel' },
      { id: generateID(), name: 'Guía Turístico' },
      { id: generateID(), name: 'Chef Ejecutivo' }
    ]
  },
  {
    id: 15,
    name: 'Ciencia e investigación',
    icon: Location,
    list: [
      { id: generateID(), name: 'Investigador Científico' },
      { id: generateID(), name: 'Biólogo' },
      { id: generateID(), name: 'Físico Teórico' }
    ]
  }
]

export const vacantPositionsSearchList: IButtonLink[] = [
  { buttonText: 'Diseñador Gráfico' },
  { buttonText: 'Editor de Video' },
  { buttonText: 'Fotógrafo Profesional' },
  { buttonText: 'Investigador Científico' },
  { buttonText: 'Biólogo' },
  { buttonText: 'Físico Teórico' },
  { buttonText: 'Gerente de Hotel' },
  { buttonText: 'Guía Turístico' },
  { buttonText: 'Chef Ejecutivo' }
]
