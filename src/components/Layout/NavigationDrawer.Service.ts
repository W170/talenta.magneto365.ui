import { HttpClient } from '../../shared/utils/Http.Util'
import { IHttpClient } from './NavigationDrawer.Interface'

export const NavigationDrawerService = ({ lang }: IHttpClient) =>
  HttpClient({
    baseURL: process.env.SETTINGS_HOST_API,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Accept-Language': lang
    }
  })
