import type { IHTTPResponses, THTTPMethod } from "~/data/interfaces/http.infaces"

export interface IUseApiOptions {
  method: THTTPMethod
  body?: object
}

export const useApi = async (path: any, options?: IUseApiOptions): Promise<IHTTPResponses> => {
  try {
    const config = useRuntimeConfig()

    const baseURL = String(config.public.baseURL)

    const data: IHTTPResponses = await $fetch(path, {
      baseURL,
      ...options,
    })

    return data
  } catch (e) {
    return {
      status: 501,
      exception: { type: 'Unexcepted', message: 'Не удалось выполнить запрос' },
      toast: { type: 'error', message: String(e) },
      version: '0.0'
    }
  }
}
