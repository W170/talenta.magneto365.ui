import {
  IFilter,
  IGetOptionsOnSearchProps,
  ISearchRenderTypeOption,
  ISetIsApplied,
  IUnApplyWithChild
} from '@components/UI/template'
import { appliedOptionsBySearchRenderType } from './'

export enum ERenderType {
  selectionList = 'SELECTION_LIST',
  search = 'SEARCH',
  multiSelect = 'MULTI_SELECT',
  check = 'CHECK',
  geoPoint = 'GEO_POINT',
  customByCompany = 'CUSTOM:BY_COMPANY'
}

export const defaultFilter = {
  renderType: ERenderType.multiSelect,
  values: Array(8).fill({ loading: true })
}

export const defaultFilters = Array(6).fill(defaultFilter)

export const storiesFilters = [
  {
    label: 'Sector laboral',
    placeholder: 'Selecciona tus sector(es) laboral(es)',
    field: 'sectors_ids',
    type: 'EQUAL',
    renderType: 'MULTI_SELECT',
    dataType: 'number',
    multiple: true,
    repository: {
      type: 'storage',
      defaultFilter: {
        active: true
      },
      defaultOrder: {
        name: 'ASC'
      },
      defaultOperator: 1,
      source: 'sectors',
      fieldsAlias: {
        id: 'id',
        label: 'name'
      }
    },
    values: [
      {
        id: 1,
        operator: 1,
        label: 'Administración y oficina',
        total: 235,
        isApplied: true
      },
      {
        id: 31,
        operator: 1,
        label: 'Comunicación y Periodismo',
        total: 14,
        isApplied: false
      },
      {
        id: 14,
        operator: 1,
        label: 'Ingenierías',
        total: 51,
        isApplied: false
      },
      {
        id: 15,
        operator: 1,
        label: 'Inversiones y mercado bursátil',
        total: 5,
        isApplied: false
      },
      {
        id: 2,
        operator: 1,
        label: 'Recursos Humanos',
        total: 132,
        isApplied: false
      },
      {
        id: 33,
        operator: 1,
        label: 'Zoología, Veterinario y sector Agroindustrial',
        total: 1,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar sector laboral'
  },
  {
    label: 'Salario',
    field: 'salary_show',
    type: 'RANGE',
    renderType: 'SELECTION_LIST',
    dataType: 'number',
    multiple: false,
    repository: {
      type: 'customFactory',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: '8fa295f4-111d-45b2-b5bc-cc7c09f63511',
      fieldsAlias: {}
    },
    values: [
      {
        operator: 1,
        type: null,
        from: -1,
        to: -1,
        id: 'BK-agree',
        label: 'A convenir',
        total: 475,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 781242,
        to: null,
        id: 'BK-01',
        label: 'Desde $781.242',
        total: 466,
        isApplied: true
      },
      {
        operator: 1,
        type: null,
        from: 1000001,
        to: 1500000,
        id: 'BK-02',
        label: '$1.000.000 a $1.500.000',
        total: 243,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 1500001,
        to: 2000000,
        id: 'BK-03',
        label: '$1.500.000 a $2.000.000',
        total: 71,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 2000001,
        to: 2500000,
        id: 'BK-04',
        label: '$2.000.000 a $2.500.000',
        total: 40,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 2500001,
        to: 3000000,
        id: 'BK-05',
        label: '$2.500.000 a $3.000.000',
        total: 24,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 3000001,
        to: 4000000,
        id: 'BK-06',
        label: '$3.000.000 a $4.000.000',
        total: 28,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 4000001,
        to: 7000000,
        id: 'BK-07',
        label: '$4.000.000 a $7.000.000',
        total: 44,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 7000001,
        to: null,
        id: 'BK-08',
        label: 'Más de $7.000.000',
        total: 10,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar salario'
  },
  {
    label: 'Experiencia requerida',
    field: 'experience_months_number',
    type: 'RANGE',
    renderType: 'SELECTION_LIST',
    dataType: 'number',
    multiple: false,
    repository: {
      type: 'valueList',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: null,
      fieldsAlias: null
    },
    values: [
      {
        operator: 1,
        type: null,
        from: null,
        to: 0,
        id: 'BK-01',
        label: 'Sin experiencia',
        total: 203,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 0,
        to: 11,
        id: 'BK-02',
        label: 'Menos de un año',
        total: 577,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 12,
        to: 24,
        id: 'BK-03',
        label: '1 a 2 años',
        total: 340,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 24,
        to: 36,
        id: 'BK-04',
        label: '2 a 3 años',
        total: 225,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 36,
        to: 60,
        id: 'BK-05',
        label: '3 a 5 años',
        total: 129,
        isApplied: false
      },
      {
        operator: 1,
        type: null,
        from: 60,
        to: 96,
        id: 'BK-06',
        label: '5 a 8 años',
        total: 31,
        isApplied: true
      },
      {
        operator: 1,
        from: 96,
        type: null,
        to: 120,
        id: 'BK-07',
        label: '8 a 10 años',
        total: 4,
        isApplied: false
      },
      {
        operator: 1,
        from: 120,
        type: null,
        to: null,
        id: 'BK-08',
        label: 'más de 10 años',
        total: 5,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar experiencia requerida'
  },
  {
    label: 'Fecha de publicación',
    field: 'publish_date',
    type: 'RANGE',
    renderType: 'SELECTION_LIST',
    dataType: 'date',
    multiple: false,
    repository: {
      type: 'customFactory',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: '3ce57a04-c815-4944-909a-4e3990df832c',
      fieldsAlias: null
    },
    values: [
      {
        id: 'BK-01',
        label: 'Hoy',
        operator: 1,
        from: '2023-08-08',
        to: '2023-08-08T23:59:59',
        total: 10,
        isApplied: false
      },
      {
        id: 'BK-02',
        label: 'Últimos 3 días',
        operator: 1,
        from: '2023-08-05',
        to: '2023-08-08T23:59:59',
        total: 51,
        isApplied: false
      },
      {
        id: 'BK-03',
        label: 'Última semana',
        operator: 1,
        from: '2023-08-01',
        to: '2023-08-08T23:59:59',
        total: 176,
        isApplied: false
      },
      {
        id: 'BK-04',
        label: 'Últimos 15 días',
        operator: 1,
        from: '2023-07-24',
        to: '2023-08-08T23:59:59',
        total: 390,
        isApplied: false
      },
      {
        id: 'BK-05',
        label: 'Último mes',
        operator: 1,
        from: '2023-07-08',
        to: '2023-08-08T23:59:59',
        total: 592,
        isApplied: false
      },
      {
        operator: 1,
        type: 'custom',
        from: 0,
        to: 0,
        id: 'BK-06',
        label: '',
        total: 243,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar fecha de publicación'
  },
  {
    label: 'Tipo de contrato',
    field: 'contract_type_id',
    type: 'EQUAL',
    renderType: 'SELECTION_LIST',
    dataType: 'number',
    multiple: false,
    repository: {
      type: 'customFactory',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: '57c0c637-0504-476f-95a4-b607bac4f26a',
      fieldsAlias: null
    },
    values: [
      {
        id: 6,
        label: 'Contrato de aprendizaje',
        operator: 1,
        total: 122,
        isApplied: false
      },
      {
        id: 4,
        label: 'Por obra o labor',
        operator: 1,
        total: 53,
        isApplied: false
      },
      {
        id: 5,
        label: 'Prestación de servicios',
        operator: 1,
        total: 2,
        isApplied: false
      },
      {
        id: 3,
        label: 'Temporal',
        operator: 1,
        total: 7,
        isApplied: false
      },
      {
        id: 1,
        label: 'Término fijo',
        operator: 1,
        total: 108,
        isApplied: false
      },
      {
        id: 2,
        label: 'Término indefinido',
        operator: 1,
        total: 562,
        isApplied: false
      }
    ],

    searchPlaceholder: 'Buscar tipo de contrato'
  },
  {
    label: 'Tipo de pasantía',
    field: 'internship_types_id',
    type: 'EQUAL',
    renderType: 'SELECTION_LIST',
    dataType: 'number',
    multiple: false,
    repository: {
      type: 'valueList',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: null,
      fieldsAlias: null
    },
    values: [
      {
        operator: 1,
        id: 1,
        label: 'Etapa productiva (aprendiz)',
        total: 61,
        isApplied: false
      },
      {
        operator: 1,
        id: 2,
        label: 'Práctica profesional',
        total: 37,
        isApplied: false
      },
      {
        operator: 1,
        id: 3,
        label: 'Patrocinio estudios técnicos/tecnológicos',
        total: 2,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar tipo de pasantía'
  },
  {
    label: 'Persona discapacitada',
    field: 'disabled_people',
    type: 'EQUAL',
    renderType: 'SELECTION_LIST',
    dataType: 'boolean',
    multiple: false,
    repository: {
      type: 'valueList',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: null,
      fieldsAlias: null
    },
    values: [
      {
        operator: 1,
        id: 'true',
        label: 'Si',
        total: 50,
        isApplied: false
      },
      {
        operator: 1,
        id: 'false',
        label: 'No',
        total: 895,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar persona discapacitada'
  },
  {
    label: 'Tipo de vacante',
    field: 'is_internal',
    type: 'EQUAL',
    renderType: 'WITH_REACT_FRAGMENT',
    dataType: 'boolean',
    multiple: false,
    repository: {
      type: 'valueList',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: null,
      fieldsAlias: null
    },
    values: [
      {
        operator: 1,
        id: 'true',
        label: 'Vacantes internas',
        hiddenCount: true,
        total: 0,
        isApplied: false
      }
    ],
    searchPlaceholder: 'Buscar tipo de vacante'
  },
  {
    label: 'Fecha de creación',
    field: 'createdAt',
    type: 'RANGE',
    dataType: 'date',
    multiple: false,
    renderType: 'SELECTION_LIST',
    repository: {
      type: 'customFactory',
      defaultFilter: {},
      defaultOrder: {},
      defaultOperator: 1,
      source: '3ce57a04-c815-4944-909a-4e3990df832c',
      fieldsAlias: {},
      values: [
        {
          id: 'BK-01',
          label: 'Hoy',
          operator: 1,
          from: '2025-11-27',
          to: '2025-11-27T23:59:59'
        },
        {
          id: 'BK-02',
          label: 'Últimos 3 días',
          operator: 1,
          from: '2025-11-24',
          to: '2025-11-27T23:59:59'
        },
        {
          id: 'BK-03',
          label: 'Última semana',
          operator: 1,
          from: '2025-11-19',
          to: '2025-11-27T23:59:59'
        },
        {
          id: 'BK-04',
          label: 'Últimos 15 días',
          operator: 1,
          from: '2025-11-12',
          to: '2025-11-27T23:59:59'
        },
        {
          id: 'BK-05',
          label: 'Último mes',
          operator: 1,
          from: '2025-10-27',
          to: '2025-11-27T23:59:59'
        },
        {
          operator: 1,
          from: 0,
          type: 'custom',
          to: null,
          id: '',
          label: 'null'
        }
      ]
    },
    values: [
      {
        id: 'BK-01',
        label: 'Hoy',
        operator: 1,
        from: '2025-11-27',
        to: '2025-11-27T23:59:59',
        isApplied: false,
        hiddenCount: true,
        total: 1
      },
      {
        id: 'BK-02',
        label: 'Últimos 3 días',
        operator: 1,
        from: '2025-11-24',
        to: '2025-11-27T23:59:59',
        isApplied: false,
        hiddenCount: true,
        total: 1
      },
      {
        id: 'BK-03',
        label: 'Última semana',
        operator: 1,
        from: '2025-11-19',
        to: '2025-11-27T23:59:59',
        isApplied: false,
        hiddenCount: true,
        total: 1
      },
      {
        id: 'BK-04',
        label: 'Últimos 15 días',
        operator: 1,
        from: '2025-11-12',
        to: '2025-11-27T23:59:59',
        isApplied: false,
        hiddenCount: true,
        total: 1
      },
      {
        id: 'BK-05',
        label: 'Último mes',
        operator: 1,
        from: '2025-10-27',
        to: '2025-11-27T23:59:59',
        isApplied: false,
        hiddenCount: true,
        total: 1
      },
      {
        operator: 1,
        from: 0,
        type: 'custom',
        to: null,
        id: '',
        label: 'null',
        isApplied: false,
        hiddenCount: true,
        total: 1
      }
    ]
  }
]

export const sideFilterProps = {
  title: 'Filtrar',
  filters: storiesFilters as IFilter[],
  totalAppliedFilters: 3,
  filterSummary: '3169 empleos',
  buttonText: 'Limpiar filtros',
  loading: false,
  isFiltersOpen: true,
  textBtnMain: 'Ver empleos',
  titleBtnClose: 'Cerrar',
  switchText: 'Apto para personas con discapacidad',

  setIsFiltersOpen: () => console.log('setIsFiltersOpen'),
  setIsApplied: (filter: ISetIsApplied): Promise<void> => new Promise((resolve) => resolve(console.log({ filter }))),
  clearFilters: (): Promise<void> => new Promise((resolve) => resolve(console.log('clearFilters'))),
  unApplyWithChild: (withChild: IUnApplyWithChild): Promise<void> =>
    new Promise((resolve) => resolve(console.log({ withChild }))),
  getOptionsOnLoad: (field: string, values: (string | number)[]) => {
    console.log('getOptionsOnLoad: ', { field, values })
    return new Promise<ISearchRenderTypeOption[]>((resolve) => resolve(appliedOptionsBySearchRenderType))
  },
  getOptionsOnSearch: (term: IGetOptionsOnSearchProps): Promise<ISearchRenderTypeOption[]> =>
    new Promise((resolve) => {
      console.log('getOptionsOnSearch: ', { term })
      return resolve([])
    })
}
