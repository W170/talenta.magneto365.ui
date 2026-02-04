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

// Components
export {
  Image,
  LogoComponent,
  DotsLoader,
  FlatLoader,
  IconItem,
  Avatar,
  BarLoader,
  Loading,
  Portal,
  Badge,
  Divider,
  Tag,
  Button
} from './components'
export type {
  IImage,
  ILogoComponent,
  IDotsLoader,
  IFlatLoader,
  IconProps,
  IAvatar,
  IBardLoader,
  ILoading,
  IPortal,
  IBadge,
  IDivider,
  DIRECTIONS,
  ITag,
  IButton
} from './components'

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
