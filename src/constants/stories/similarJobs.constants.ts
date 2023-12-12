import { ISimilarJobsCard } from '@components/UI/molecules/SimilarJobsCard/SimilarJobsCard.interface'

export const sectionTitle = 'Empleos similares'
export const moreJobsText = 'Ver todos los empleos similares'
export const moreJobsLink = '#'
export const hideLogo = false

export const similarVacanciesCardsProps: ISimilarJobsCard[] = [
  {
    id: 1,
    title: 'Analista Negociacion Compras',
    cities: ['Cali', 'Bogota', 'Armenia'],
    salary: 'Salario a convenir',
    toAgree: true,
    jobUrlSlug: '#',
    experience: '1 año de experiencia',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Exito'
  },
  {
    id: 2,
    title: 'Data Analyst',
    cities: ['Pasto', 'Bogota', 'Armenia', 'Manizales'],
    salary: 'Salario a convenir',
    toAgree: true,
    jobUrlSlug: '#',
    experience: 'Sin experiencia',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Exito'
  },
  {
    id: 3,
    title: 'Auxiliar Punto de Venta',
    cities: ['Bucaramanga'],
    salary: 'Salario a convenir',
    toAgree: true,
    jobUrlSlug: '#',
    experience: '1 año de experiencia',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Exito'
  },
  {
    id: 4,
    title: 'Desarrollador de negocios B2B (panaderias)',
    cities: ['Cali', 'Bogota'],
    salary: 'Salario a convenir',
    toAgree: true,
    jobUrlSlug: '#',
    experience: '3 año de experiencia',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Exito'
  },
  {
    id: 5,
    title: 'Auxiliar de Servicios Generales',
    cities: ['Cartagena', 'Bogota', 'Armenia'],
    salary: 'Salario a convenir',
    toAgree: true,
    jobUrlSlug: '#',
    experience: '2 año de experiencia',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Exito'
  }
]
