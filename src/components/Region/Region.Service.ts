import { IHttpClient } from '../Layout'
import { HttpClient } from '../../shared/utils/Http.Util'

export const RegionService = ({ lang }: IHttpClient) =>
  HttpClient({
    baseURL: process.env.SETTINGS_HOST_API,
    headers: {
      'Accept-Language': lang
    }
  })
