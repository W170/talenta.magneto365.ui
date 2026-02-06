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

// Hooks
export { useMediaQuery, useClickOutside, useWithElement } from './hooks'

// HOCs
export { withClickOut } from './hoc'

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

// NOTE: Components must be imported via subpath exports:
// import { LogoComponent } from '@magneto365-ui/primitives/Logo'
// import { Button } from '@magneto365-ui/primitives/Button'
// import { Typography } from '@magneto365-ui/primitives/Typography'
// See README.md for full list of available components
