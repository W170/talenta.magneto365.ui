import { IMainButton } from '@components/UI/atoms'
import { IListMenuItems, MenuItemInfo } from '@components/UI/molecules'
import { ICardImage } from '@components/UI/molecules/CardImage'
import { ArchiveAdd } from '@constants/icons.constants'

const MenuList: MenuItemInfo[] = [
  { text: 'Leer un ejemplo', url: '#', slug: '' },
  { text: 'Ver detalles', url: '#', slug: '' },
  { text: 'Agregar a historial', url: '#', slug: '' },
  { text: 'También tr puede interesar', url: '#', slug: '' }
]

export const listMenuCardProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: '/overdrive'
}

export const buttonsFooterConfig: IMainButton[] = [
  {
    buttonType: 'button',
    buttonText: 'Pedir prestado',
    className: 'button-borrow',
    buttonSize: 'medium',
    buttonStyles: {
      buttonColor: '#090467'
    },
    onClick: (e) => console.log(e)
  },
  {
    buttonType: 'button',
    className: 'button-saved',
    buttonSize: 'small',
    buttonStyles: {
      buttonColor: 'transparent'
    },
    iconProps: {
      icon: ArchiveAdd,
      hover: true,
      color: '#090467 '
    },
    onClick: (e) => console.log(e)
  }
]

export const cardImageProps: ICardImage = {
  id: 'eb4ba142-5d73-4c88-8ea8-a0f80cd836da',
  availableText: 'Disponible',
  title: '7 TV-Dage',
  sortTitle: '$107 TV-Dage',
  mediaType: 'Ebook',
  urlRedirect: '',
  authors: [
    {
      name: 'Alan',
      role: 'author'
    }
  ],
  publisher: 'Aller Media A/S',
  cover: 'https://img1.od-cdn.com/ImageType-100/11052-1/{3F902F4F-20F6-4A9B-B757-4E047F3E576B}IMG100.JPG',
  languages: [
    {
      code: 'da',
      name: 'Danish'
    },
    {
      code: 'co',
      name: 'Español'
    }
  ],
  fullDescription:
    '<p>Este libro podría haber sido escrito por una inteligencia artificial, y no solamente por un humano en un documento de Word. Aunque, en parte, así fue. Con inteligencia artificial podemos escribir ensayos, incluso libros, y también, entre muchas posibilidades, predecir cuántos pacientes llegarán a un hospital con gripe dentro de quince días, o detectar automáticamente una operación fraudulenta con una tarjeta de crédito. ¿Cuáles son los límites de esta tecnología? ¿Cuáles son sus riesgos? ¿Cuál es la mejor manera de aprovecharla? ¿Cómo desarrollar inteligencia artificial responsablemente? En ¿Cómo piensan las máquinas?, Fredi Vivas te invita a sumarte a un viaje fascinante, una aventura literaria que transita entre la realidad y la ficción para demostrarnos que, independientemente del área o disciplina, la inteligencia artificial está revolucionando la vida humana mucho más de lo que creemos o soñamos. Y como no podía ser de otra forma, este es un libro interactivo, que incorpora tecnología en sus páginas, y que propone al lector una experiencia multiplataforma. Apto para cualquiera que tenga como objetivo entender el mundo que se viene y estar a la vanguardia de la revolución tecnológica, ¿Cómo piensan las máquinas? no requiere conocimientos técnicos previos y apuesta por la curiosidad y el interés por el futuro.</p',
  starRating: 0,
  formats: [
    {
      id: 'audio-overdrive',
      name: 'OverDrive audio',
      fileName: 'audio',
      onSaleDate: '1/4/2021',
      fileSize: 2275483,
      identifiers: [
        {
          type: 'ISBN',
          value: '9780061757051'
        }
      ],
      samples: [
        {
          source: 'From the Issue',
          formatType: 'magazine-overdrive',
          url: 'https://samples.overdrive.com/?crid=fa83dc35-02a0-43dd-8819-fae2cc1dc9fb&.epub-sample.overdrive.com'
        }
      ]
    },
    {
      id: 'ebook-kindle',
      name: 'Kindle Book',
      fileName: 'Queste_161881',
      onSaleDate: '10/13/2009',
      fileSize: 0,
      identifiers: [
        {
          type: 'ASIN',
          value: 'B0010SEMO6'
        }
      ]
    }
  ],
  subjects: [
    {
      value: 'Movies, TV & Music'
    },
    {
      value: 'Sci-fiction'
    }
  ],
  available: true,
  copiesAvailable: 999999,
  numberOfHolds: 0,
  byText: 'por',
  buttonsFooter: buttonsFooterConfig,
  listMenuProps: listMenuCardProps
  //formatsColumn: formatsColumnProps
}
