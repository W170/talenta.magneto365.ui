import { IButtonLink } from '@components/UI/atoms'
import { IBarsChart } from '@components/UI/molecules/BarsChart/BarsChart.interface'
import { ICategoryMenuCard } from '@components/UI/organism'
import { IVacantPositions } from '@components/UI/template'
import {
  Book1,
  Box,
  Broom,
  Brush2,
  Computing,
  Device1,
  Glass,
  Hospital,
  Like,
  Location,
  Message,
  Ranking,
  Setting,
  Sun,
  Tree,
  Video1
} from '@constants/icons.constants'
import { generateID } from '@utils/generateID/generateID.util'

export const categoriesData: ICategoryMenuCard[] = [
  {
    name: 'Tecnología y sistemas',
    icon: 'oficios-varios-aseo-seguridad',
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
    ],
    href: 'https://www.magneto365.com/es',
    seeAllText: 'Ver mas empleos'
  },
  {
    name: 'Tecnología y sistemas',
    icon: Location,
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
    ],
    href: 'https://www.magneto365.com/es',
    seeAllText: 'Ver mas empleos'
  },
  {
    name: 'Tecnología y sistemas',
    icon: Location,
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
    ],
    href: 'https://www.magneto365.com/es',
    seeAllText: 'Ver mas empleos'
  },
  {
    name: 'Tecnología y sistemas',
    icon: Location,
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
    ],
    href: 'https://www.magneto365.com/es',
    seeAllText: 'Ver mas empleos'
  },
  {
    name: 'Tecnología y sistemas',
    icon: Location,
    list: [
      { id: generateID(), name: 'Desarrollador de Software', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Analista de Datos', href: 'https://www.magneto365.com/es' },
      { id: generateID(), name: 'Administrador de Redes', href: 'https://www.magneto365.com/es' }
    ],
    href: 'https://www.magneto365.com/es',
    seeAllText: 'Ver mas empleos'
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

export const programaticIcons = {
  'oficios-varios-aseo-seguridad': Broom,
  'manufactura-produccion-operativos': Box,
  'construccion-oficios-artesanias': Brush2,
  'tecnicos-reparaciones-mantenimiento': Setting,
  'ventas-servicio-cliente-marketing': Like,
  'medios-arte-produccion-audiovisual': Video1,
  'direccion-gerencia': Ranking,
  'profesionales-consultorias-servicios': Message,
  'informatica-tecnologia-sistemas': Device1,
  ingenieria: Computing,
  'agricultura-recursos-naturales': Tree,
  'educacion-formacion-docencia': Book1,
  'salud-medicina': Hospital,
  'ciencia-investigacion': Glass,
  'hoteleria-turismo-gastronomia': Sun
}

export const vacantPositionsData: IVacantPositions = {
  title: 'Selecciona la categoría en la que quieres buscar un cargo',
  subtitle: 'Te llevaremos a la sección donde podrás acceder a la información de salarios y funciones de esos cargos',
  backButtonProps: {
    buttonText: 'Volver',
    href: '/',
    onClick: () => {
      console.log()
    }
  },
  viewMoreProps: {
    buttonText: 'Conoce todas las vacantes disponibles para Ingenieros',
    href: '/',
    onClick: () => {
      console.log()
    }
  },
  filterProps: {
    allActionText: 'Todas',
    onClickAction: () => {
      console.log('')
    },
    title: 'Filtrar por letra inicial:'
  }
}

export const BarsChartData: IBarsChart = {
  data: [
    { bin: [1000000, 1500000], jobText: 'test', heightPercentage: 1 },
    { bin: [1500000, 2000000], jobText: 'test', heightPercentage: 0.5 },
    { bin: [2000000, 2500000], jobText: 'test', heightPercentage: 0.75 },
    { bin: [2500000, 3000000], jobText: 'test', heightPercentage: 0.25 },
    { bin: [3000000, 3500000], jobText: 'test', heightPercentage: 0.04 },
    { bin: [4000000, 4500000], jobText: 'test', heightPercentage: 0.15 },
    { bin: [5000000, 5500000], jobText: 'test', heightPercentage: 0.1 },
    { bin: [6000000, 6500000], jobText: 'test', heightPercentage: 0.25 },
    { bin: [7000000, 7500000], jobText: 'test', heightPercentage: 0.1 },
    { bin: [8000000, 8500000], jobText: 'test', heightPercentage: 0.5 }
  ],
  mean: 1400000,
  texts: {
    jobs: 'empleos',
    mean: 'Promedio',
    month: 'mes'
  }
}
