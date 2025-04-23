export interface IContainerContext {
  container: HTMLElement | null
  isClient: boolean
  isServer: boolean
}

export interface IContainerContextProvider {
  container?: HTMLElement
}
