export interface IContainerContext {
  container: HTMLElement | ShadowRoot | null
}

export interface IContainerContextProvider {
  container?: HTMLElement
}
