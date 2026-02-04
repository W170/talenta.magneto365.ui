// Contexts
export {
  EventDispatcherContext,
  EventDispatcherContextProvider,
  ResponsiveContext,
  ResponsiveContextProvider,
  ContainerContext,
  ContainerContextProvider,
  MagnetoUIProvider,
  ContextAppProvider,
  withContextAppProvider
} from './context'

export type {
  IContextAppProvider,
  DeviceType,
  IResponsiveContext,
  IContainerContext,
  IContainerContextProvider
} from './context'

// Re-export utilities from shared package for convenience
export {
  classNames,
  CNM,
  isRef,
  renderChildren,
  EventDispatcher,
  screenSize,
  isClient,
  isServer
} from '@magneto365-ui/shared'
export type { Dimension, DimType, EventType } from '@magneto365-ui/shared'
