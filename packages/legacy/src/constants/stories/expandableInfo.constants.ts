import { IExpandableInfoProps } from '@components/UI/molecules/ExpandableInfo'

export const expandableInfoProps: IExpandableInfoProps = {
  title: 'Créditos disponibles',
  summary: '55',
  details: {
    sections: [
      {
        children: [
          {
            title: 'Créditos disponibles',
            summary: '55'
          }
        ]
      },
      {
        children: [
          {
            title: 'Plan gratuito',
            summary: '10'
          },
          {
            title: 'Plan estándar:',
            summary: '20',
            content: [
              {
                title: 'Crédito x unidad:',
                summary: '10'
              }
            ]
          }
        ]
      }
    ],
    footer: {
      title: 'Ver detalles',
      onAction: () => console.log('clicked details')
    }
  },
  actions: [
    {
      title: 'Comprar plan de créditos',
      onAction: 'https://www.google.com',
      className: 'className',
      variant: 'light-blue',
      prefixIcon: {
        icon: 'shoppingCart'
      }
    },
    {
      title: 'Comprar créditos por unidad',
      onAction: 'https://www.google.com',
      className: 'className',
      variant: 'dark-blue',
      prefixIcon: {
        icon: 'coin'
      }
    }
  ]
}

export const expandableInfoPropsVariantBlue: Pick<IExpandableInfoProps, 'variant' | 'actions'> = {
  variant: 'blue',
  actions: [
    {
      title: 'Ver datos',
      variant: 'green',
      loading: true
    }
  ]
}

export const expandableInfoPropsWithMessage: Pick<IExpandableInfoProps, 'variant' | 'actions' | 'message'> = {
  variant: 'blue',
  actions: [
    {
      title: 'Comprar créditos',
      variant: 'white'
    }
  ],
  message: {
    title: 'Límite alcanzado',
    prefixIcon: {
      icon: 'warning'
    }
  }
}

export const expandableInfoPropsSizeSmall: Pick<IExpandableInfoProps, 'size' | 'prefixIcon'> = {
  size: 'small',
  prefixIcon: {
    icon: 'coin'
  }
}
