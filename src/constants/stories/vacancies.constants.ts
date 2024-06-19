import { IVacancies } from '@components/UI/page'
import {
  ArchiveAdd,
  Briefcase,
  Buildings2,
  Calendar1,
  DollarCircle,
  Export3,
  FacebookBlue,
  LinkedInBlue,
  People,
  SMSBlue,
  Share,
  TwitterBlue,
  WhatsAppColor,
  Location,
  Tag
} from '@constants/icons.constants'
import { IShareLink } from '../../../dist'

export const vacancies: IVacancies[] = [
  {
    id: 1,
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel:
      'Básica primaria, Bachillerato (grados 6°, 7° u 8°), Bachillerato (grados 9°, 10° y 11°), Bachillerato completo, Técnico, Tecnólogo, Profesional, Especialización/ Maestría, Doctorado.',
    experience: '6 meses de experiencia',
    salary: '1.200.000 a 4.000.000',
    formatPublishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    urgent: '¡Se requiere urgente!',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 2,
    title: 'Analista',
    cities: ['Medellin', 'Barranquila', 'Bogota'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Coca-cola',
    companySlug: 'coca-cola',
    educationLevel: 'Arquitecto',
    experience: '12 meses de experiencia',
    salary: '3.200.000',
    formatPublishDate: 'hace 20 dias',
    others: 'otras',
    contractType: 'Prestacion de servicios',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 3,
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    salary: '3.000.000',
    formatPublishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido',
    offerVacancyData: '30 cupos, 2 postulantes',
    urgent: '¡Se requiere urgente!',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',

    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 4,
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel:
      'Básica primaria, Bachillerato (grados 6°, 7° u 8°), Bachillerato (grados 9°, 10° y 11°), Bachillerato completo, Técnico, Tecnólogo, Profesional, Especialización/ Maestría, Doctorado.',
    experience: '6 meses de experiencia',
    salary: '1.200.000 a 4.000.000',
    formatPublishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 5,
    title: 'Analista',
    cities: ['Medellin', 'Barranquila', 'Bogota'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Coca-cola',
    companySlug: 'coca-cola',
    educationLevel: 'Arquitecto',
    experience: '12 meses de experiencia',
    salary: '3.200.000',
    formatPublishDate: 'hace 20 dias',
    others: 'otras',
    contractType: 'Prestacion de servicios',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 6,
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    salary: '3.000.000',
    formatPublishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 7,
    title: 'Desarrollador Web',
    cities: ['Medellin', 'Barranquila', 'Bogota', 'Cali', 'Pasto', 'Cartagena'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KGGKFa3GNtqGOaHoMxCqhaIj1Xauu3n61Q&usqp=CAU',
    companyName: 'Adidas',
    companySlug: 'adidas',
    educationLevel:
      'Básica primaria, Bachillerato (grados 6°, 7° u 8°), Bachillerato (grados 9°, 10° y 11°), Bachillerato completo, Técnico, Tecnólogo, Profesional, Especialización/ Maestría, Doctorado.',
    experience: '6 meses de experiencia',
    salary: '1.200.000 a 4.000.000',
    formatPublishDate: 'hace 10 dias',
    others: 'otras',
    contractType: 'Termino fijo',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 8,
    title: 'Analista',
    cities: ['Medellin', 'Barranquila', 'Bogota'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KMoo9RUN_NnD4aWgDuHUeEGTUfJXpimlWA&usqp=CAU',
    companyName: 'Coca-cola',
    companySlug: 'coca-cola',
    educationLevel: 'Arquitecto',
    experience: '12 meses de experiencia',
    salary: '3.200.000',
    formatPublishDate: 'hace 20 dias',
    others: 'otras',
    contractType: 'Prestacion de servicios',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  },
  {
    id: 9,
    title: 'UX | UI designer',
    cities: ['Medellin', 'Barranquila', 'Cali', 'Pasto'],
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPt4mvHEh4kyEkHx7bRVB1PXGPd_rvGZDmaA&usqp=CAU',
    companyName: 'Lego',
    companySlug: 'legos',
    educationLevel: 'Tecnologo',
    experience: '6 meses de experiencia',
    salary: '3.000.000',
    formatPublishDate: 'hace 2 meses',
    others: 'otras',
    contractType: 'Termino indefinido',
    offerVacancyData: '30 cupos, 2 postulantes',
    offerDescription:
      '<h1>¡Trabaja con el Grupo Éxito!</h1><br /><p>Importante no estar en ningun otro proceso con el Grupo Éxito. Buscamos personas como tú,  que deseen trabajar en el cargo auxiliar polivalente.</p> <h1>¿Qué necesitas?</h1><br /><p>Mínimo 2 años de experiencia, ser profesional.<br /><br />Disponibilidad de tiempo para laborar del  21 de Enero 2022  al 17 de Julio de 2023 turnos de 6  horas diarias, con posibilidad  de continuar en otras temporadas o seguir en cargos fijos.<br /><br />Estar cursando los últimos grados de la carrera o haberla finalizado.</p><h1>¿Qué te ofrecemos?</h1><br /><p>Salario entre $2’000.000 a $3’000.000 aproximadamente.</p> <h1>¡Aplica y no te pierdas esta oportunidad!</h1><br /><p>Si está interesado(a) y cumple con los requisitos debe estar pendiente de su correo electrónico y número de celular personal para envío de pruebas psicotécnicas y citación a video entrevista. FAVOR actualice esta información en la plataforma si cambió de número o el correo no es suyo o no puede ingresar.</p>',
    offerSkills: {
      offerSkillsLabel: 'Habilidades',
      offerSkills: [
        { id: 12, name: 'Habilidades comerciales', score: 2 },
        { id: 12, name: 'Capacidad de negociación', score: 4 },
        { id: 12, name: 'Conocimiento de microfinanzas', score: 1 }
      ]
    }
  }
]

export const buttonIconsList = [ArchiveAdd, Share]

export const anchorIconList = [Export3, Buildings2]

export const iconDetailList = [Calendar1, People, Briefcase, DollarCircle, Location, Tag]

export const altList = [
  'Calendar1-icon',
  'People-icon',
  'Briefcase-icon',
  'DollarCircle-icon',
  'Location-icon',
  'Tag-icon'
]

export const iconFooterList = [FacebookBlue, WhatsAppColor, LinkedInBlue, TwitterBlue, SMSBlue]

export const shareLinks: IShareLink[] = [
  {
    title: 'Facebook',
    ariaLabel: 'Facebook',
    href: '#',
    name: 'Facebook'
  },
  {
    title: 'LinkedIn',
    ariaLabel: 'LinkedIn',
    href: '#',
    name: 'LinkedIn'
  },
  {
    title: 'X',
    ariaLabel: 'X',
    href: '#',
    name: 'X'
  },
  {
    title: 'SMS',
    ariaLabel: 'SMS',
    href: '#',
    name: 'Sms'
  }
]
