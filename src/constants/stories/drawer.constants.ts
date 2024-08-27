import { IListIcon, IListMenuItems, MenuItemInfo } from '@components/UI/molecules'
import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
  Youtube,
  InstagramSolid,
  FacebookSolid,
  LinkedinSolid,
  YoutubeSolid,
  TiktokSolid
} from '@constants/icons.constants'

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
  { title: 'Magneto Instagram url', icon: Instagram, url: 'https://www.instagram.com/magnetoempleos/' },
  { title: 'Magneto Facebook url', icon: Facebook, url: 'https://www.facebook.com/MagnetoEmpleos?_rdc=4&_rdr' },
  { title: 'Magneto Linkedin url', icon: Linkedin, url: 'https://www.linkedin.com/company/magnetoempleos/' },
  { title: 'Magneto Youtube url', icon: Youtube, url: 'https://www.youtube.com/c/Magnetoempleos' },
  { title: 'Magneto Tiktok url', icon: Tiktok, url: 'https://www.tiktok.com/@magnetoempleos' }
]

export const ListMegaMenu: IListIcon[] = [
  { title: 'Magneto Instagram url', icon: InstagramSolid, url: 'https://www.instagram.com/magnetoempleos/' },
  { title: 'Magneto Facebook url', icon: FacebookSolid, url: 'https://www.facebook.com/MagnetoEmpleos?_rdc=4&_rdr' },
  { title: 'Magneto Linkedin url', icon: LinkedinSolid, url: 'https://www.linkedin.com/company/magnetoempleos/' },
  { title: 'Magneto Youtube url', icon: YoutubeSolid, url: 'https://www.youtube.com/c/Magnetoempleos' },
  { title: 'Magneto Tiktok url', icon: TiktokSolid, url: 'https://www.tiktok.com/@magnetoempleos' }
]

export const listMenuProps: IListMenuItems = {
  menuList: MenuList,
  urlParam: 'empleos-por-empresas'
}
