import { ISimilarCardData } from '@components/UI/molecules/SimilarCard'

export const similarCardData: ISimilarCardData = {
  id: 1,
  title: 'Analista Negociacion Compras',
  cities: ['Cali', 'Bogota', 'Armenia'],
  salary: 'COP $1.300.000 a $2.600.000',
  toAgree: true,
  jobUrlSlug: '#',
  experience: null,
  companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
  companyName: 'Exito',
  contractType: 'Termino Indefinido'
}

export const customTextCardType = [
  { value: similarCardData.title, fontWeight: 'bold', lineBreak: true },
  { value: `${similarCardData.companyName} | ${similarCardData.contractType}`, fontWeight: 'normal', lineBreak: true },
  { value: similarCardData.salary, fontWeight: 'normal', lineBreak: true }
]
