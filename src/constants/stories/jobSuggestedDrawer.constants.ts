import { IJobSuggestedDrawer } from '@components/UI/organism'
import { CompanyLogo } from '@constants/stories'

export const jobCompanyHeader: IJobSuggestedDrawer.Header = {
  jobCompanyLogoProps: {
    offerCompanyLogo: CompanyLogo as unknown as JSX.Element,
    alt: 'Grupo Exito Logo'
  },
  jobHeaderProps: {
    offerTitle: 'Comunicador Audiovisual',
    offerCompanyName: 'Grupo Exito',
    typeTitle: 'MainTitle'
  }
}

export const SimilarJobsData: IJobSuggestedDrawer.SimilarJobCards = {
  sectionTitle: 'Trabajos similares a los que puedes aplicar: ',
  hideLogo: false,
  url: '#',
  tag: 'Ver todos los trabajos similares',
  similarJobsCard: [
    {
      id: 1,
      title: 'Analista Negociacion Compras',
      cities: ['Cali', 'Bogota', 'Armenia'],
      salary: 'COP $1.800.000 a $2.300.000',
      toAgree: true,
      jobUrlSlug: '#',
      experience: null,
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    },
    {
      id: 2,
      title: 'Data Analyst',
      cities: ['Pasto', 'Bogota', 'Armenia', 'Manizales'],
      salary: 'Salario a convenir',
      toAgree: true,
      jobUrlSlug: '#',
      experience: null,
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    },
    {
      id: 3,
      title: 'Auxiliar Punto de Venta',
      cities: ['Bucaramanga'],
      salary: 'Salario a convenir',
      toAgree: true,
      jobUrlSlug: '#',
      experience: null,
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    },
    {
      id: 4,
      title: 'Desarrollador de negocios B2B (panaderias)',
      cities: ['Cali', 'Bogota'],
      salary: 'Salario a convenir',
      toAgree: true,
      jobUrlSlug: '#',
      experience: '3 año de experiencia',
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    },
    {
      id: 5,
      title: 'Auxiliar de Servicios Generales',
      cities: ['Cartagena', 'Bogota', 'Armenia'],
      salary: 'COP $2.000.000 a $2.600.000',
      toAgree: true,
      jobUrlSlug: '#',
      experience: '2 año de experiencia',
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    },
    {
      id: 6,
      title: 'Desarrollador de Software',
      cities: ['Cartagena', 'Bogota', 'Armenia'],
      salary: 'Salario a convenir',
      toAgree: true,
      jobUrlSlug: '#',
      experience: '2 año de experiencia',
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
      companyName: 'Exito',
      contractType: 'Termino Indefinido'
    }
  ]
}
