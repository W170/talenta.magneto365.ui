import {
  ArchiveAdd,
  BuildingWhite,
  Date,
  DollarCircleWhiteOutline,
  EmailSquare,
  LocationBlueBold,
  Mobile,
  More,
  PeopleInfo,
  Position,
  Teacher,
  UserTag,
  VideoAddLinearBlack,
  ArrowRightWhite,
  Email,
  Close
} from '@constants/icons.constants'

export const candidateProfileProps: Record<string, any> = {
  avatar: {
    userImage:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  score: '4.5',
  header: {
    lastUpdate: 'Ultima actualización 26/12/2024',
    name: 'Sebastian',
    lastName: 'Cabal Quiroz',
    role: 'Ingeniero de sistemas'
  },
  internal: [
    {
      icon: BuildingWhite,
      title: 'Empresa',
      value: 'Grupo Bolivar'
    },
    {
      icon: UserTag,
      title: 'Cargo',
      value: 'Analista funcional'
    },
    {
      icon: Position,
      title: 'Posicion',
      value: 'Interno'
    }
  ],
  details: [
    {
      title: 'Datos personales',
      children: [
        {
          value: 'CC 1037651011',
          icon: Position
        },
        {
          value: '14 / 08 / 1987',
          icon: Date
        },
        {
          value: 'Masculino, 35 años',
          icon: PeopleInfo
        },
        {
          value: 'nombre@correo.com',
          icon: EmailSquare
        },
        {
          value: '+57 3002002028',
          icon: Mobile
        },
        {
          value: 'Medellín, Colombia',
          color: 'blue',
          icon: LocationBlueBold
        }
      ]
    },
    {
      title: 'Nivel de estudios',
      children: [
        {
          value: 'Especialización / maestría',
          icon: Teacher
        }
      ]
    },
    {
      title: 'Aspiración salarial',
      children: [
        {
          value: '$2.000.000',
          icon: DollarCircleWhiteOutline
        }
      ]
    },
    {
      title: 'Categoría',
      children: [
        {
          value: 'Diseño'
        }
      ]
    }
  ]
}

export const CandidateNavProps: Record<string, any> = {
  cancelar: Close,
  nextStep: {
    value: 'Siguiente etapa',
    icon: ArrowRightWhite
  },
  optionIcon: More,
  options: [
    {
      icon: VideoAddLinearBlack,
      value: 'Repetir video entrevista'
    },
    {
      icon: ArchiveAdd,
      value: 'Separar candidato'
    }
  ],
  candidate: {
    candidateCount: '1 de 1',
    amount: 1,
    value: 'Candidato ',
    count: 1
  },
  inviteAi: {
    icon: Email,
    value: 'Invitar a postular'
  }
}
