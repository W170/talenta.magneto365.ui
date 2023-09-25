import { IListIcon, IListMenuItems, MenuItemInfo } from '@components/UI/molecules'
import { Facebook, Instagram, Link, Linkedin, Tiktok, Youtube } from '@constants/icons.constants'

export const MenuList: MenuItemInfo[] = [
  { text: 'Inicio', url: '#', slug: 'inicio' },
  { text: 'Todos los empleos', url: '/co/empleos', slug: 'empleos' },
  { text: 'Empleos por ciudad', url: '/co/trabajos/empleos-por-ciudades', slug: 'empleos-por-ciudades' },
  { text: 'Empleos por empresa', url: '/home/empleos-por-empresas/', slug: 'empleos-por-empresas' },
  {
    text: 'Empleos por sector laboral',
    url: '/co/trabajos/empleos-por-sector-laboral',
    slug: 'empleos-por-sector-laboral'
  },
  {
    text: 'Empleos por cargo profesional',
    url: '/co/trabajos/empleos-por-cargo-profesional',
    slug: 'empleos-por-cargo-profesional'
  },
  { text: 'Empleos mas buscandos', url: '/co/trabajos/empleos-mas-buscados', slug: 'empleos-mas-buscandos' },
  { text: 'Preguntas frecuentes', url: '/home/preguntas-frecuentes/', slug: 'preguntas-frecuentes' },
  { text: 'Soluciones empresariales', url: '/home/soy-empresa/', slug: 'preguntas-frecuentes' },
  { text: 'Articulos de interes', url: '/home/blog/', slug: 'blog' }
]

export const ListIcon: IListIcon[] = [
  { icon: Facebook, url: 'https://www.facebook.com/MagnetoEmpleos?_rdc=4&_rdr' },
  { icon: Instagram, url: 'https://www.instagram.com/magnetoempleos/' },
  { icon: Linkedin, url: 'https://www.linkedin.com/company/magnetoempleos/' },
  { icon: Youtube, url: 'https://www.youtube.com/c/Magnetoempleos' },
  { icon: Tiktok, url: 'https://www.tiktok.com/@magnetoempleos' },
  { icon: Link, url: 'https://www.magneto365.com/home/#comparte-magneto' }
]

export const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: 'empleos-por-empresas'
}
