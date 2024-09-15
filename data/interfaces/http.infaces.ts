export type THTTPMethod = 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE'
export type TToastType = 'waning' | 'error' | 'cool'

export interface IToast {
  type: TToastType
  message: string
}

export interface IHTTPParams {
  name: string
  required: boolean
  value: string
  type?: string
}

export interface IHTTPResponses<IBody = any> {
  status: number
  toast?: IToast
  exception: {
    type: string
    message: string
  }
  body?: IBody
  version?: string
}

export interface IApiHTTPMethod {
  id: string
  method: THTTPMethod
  path: string
  section: string
  description?: string
  requiredAuth?: boolean
  responses?: IHTTPResponses[]
  params?: IHTTPParams[]
}

export interface IEntityParam {
  name: string
  value: string
  type: string
}

export interface IEntity {
  params: IEntityParam[]
  name: string
}

export interface ISocketEvent {
  name: string
  description: string
  body: IEntityParam[]
}

export interface IAction {
  message: string
  description: string
  params: IEntityParam[]
}

export interface ISocketWorkspace {
  id: string
  name: string
  description: string
  evetns: ISocketEvent[]
  actions: IAction[]
}

export interface IUnionType {
  name: string
  description: string
  values: string[]
}
