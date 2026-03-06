// Auto-generated DO NOT EDIT
declare module 'magneto-ui' {
  /**
   * @description Border SCSS vars used to define border width consistently across components.
   * @example ```scss
   * .card {
   *   border: $border-1 solid $color-grey-50;
   * }
   * ```
   * @category visual
   * @tags border, style, width, outline, visual
   */
  export type MagnetoUIBorder = '1' | '2' | 'inherit' | 'min'

  /**
   * @description Color SCC vars used to maintain brand and accessibility standards across the UI.
   * @example ```scss
   * .button {
   *   background-color: $color-red-300;
   *   color: $color-grey-50;
   * }
   * ```
   * @category theme
   * @tags color, theme, palette, branding, accessibility
   */
  export type MagnetoUIColor =
    | 'transparent'
    | 'inherit'
    | 'current'
    | 'blue-dark-50'
    | 'blue-dark-100'
    | 'blue-dark-200'
    | 'blue-dark-300'
    | 'blue-dark-400'
    | 'blue-dark-500'
    | 'blue-light-50'
    | 'blue-light-100'
    | 'blue-light-200'
    | 'blue-light-300'
    | 'blue-light-400'
    | 'blue-light-500'
    | 'green-50'
    | 'green-100'
    | 'green-200'
    | 'green-300'
    | 'green-400'
    | 'green-500'
    | 'green-600'
    | 'grey-50'
    | 'grey-100'
    | 'grey-200'
    | 'grey-300'
    | 'grey-400'
    | 'grey-500'
    | 'grey-600'
    | 'grey-700'
    | 'grey-800'
    | 'grey-900'
    | 'red-50'
    | 'red-100'
    | 'red-200'
    | 'red-300'
    | 'yellow-50'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'purple-50'
    | 'purple-200'

  /**
   * @description Spacing SCC vars for CSS `gap` properties. Useful in layout systems based on grid or flexbox.
   * @example ```scss
   * .container {
   *   gap: $gap-md;
   * }
   * ```
   * @category layout
   * @tags spacing, gap, layout, grid, flexbox
   */
  export type MagnetoUIGap =
    | 'inherit'
    | 'min'
    | 'xs'
    | 'sm'
    | 'sm-2'
    | 'md'
    | 'md-2'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'full'

  /**
   * @description Spacing SCCS vars used for setting margin around elements for consistent layout spacing.
   * @example ```scss
   * .card {
   *   margin: $margin-sm;
   * }
   * ```
   * @category spacing
   * @tags spacing, margin, layout, spacing-system
   */
  export type MagnetoUIMargin =
    | 'inherit'
    | 'none'
    | 'auto'
    | 'min'
    | 'xs'
    | 'sm'
    | 'sm-2'
    | 'md'
    | 'md-2'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'full'

  /**
   * @description Opacity SCC vars used to define transparency levels for elements and UI states.
   * @example ```scss
   * .overlay {
   *   opacity: $opacity-70;
   * }
   * ```
   * @category visual
   * @tags opacity, transparency, visibility, visual
   */
  export type MagnetoUIOpacity =
    | '10'
    | '12'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '80'
    | '90'
    | 'inherit'
    | 'min'
    | 'full'

  /**
   * @description Spacing SCCS vars used for internal spacing (padding) inside elements.
   * @example ```scss
   * .card {
   *   padding: $padding-lg;
   * }
   * ```
   * @category spacing
   * @tags spacing, padding, layout, box-model
   */
  export type MagnetoUIPadding =
    | 'inherit'
    | 'min'
    | 'xs'
    | 'sm'
    | 'sm-2'
    | 'md'
    | 'md-2'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'full'

  /**
   * @description Radius SCSS vars used to define consistent border-radius values across components.
   * @example ```scss
   * .button {
   *   border-radius: $radius-md;
   * }
   * ```
   * @category visual
   * @tags radius, border-radius, rounding, shape, visual
   */
  export type MagnetoUIRadius =
    | 'inherit'
    | 'min'
    | 'xs'
    | 'sm'
    | 'sm-2'
    | 'md'
    | 'md-2'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | 'full'

  /**
   * @description Scale SCSS vars for handling responsive designs.
   * @example ```scss
   * .icon:hover {
   *   transform: scale($scale-rem-md);
   * }
   * ```
   * @category motion
   * @tags scale, transform, animation, motion
   */
  export type MagnetoUIScale =
    | 'inherit'
    | 'none'
    | 'auto'
    | 'full'
    | 'min'
    | 'px-base'
    | 'px-xxs'
    | 'px-xs'
    | 'px-sm'
    | 'px-sm-2'
    | 'px-md'
    | 'px-md-2'
    | 'px-lg'
    | 'px-xl'
    | 'px-2xl'
    | 'px-3xl'
    | 'px-4xl'
    | 'px-5xl'
    | 'px-container-xxs'
    | 'px-container-xs'
    | 'px-container-sm'
    | 'px-container-md'
    | 'px-container-lg'
    | 'px-container-xl'
    | 'px-container-2xl'
    | 'px-container-3xl'
    | 'rem-xxs'
    | 'rem-xs'
    | 'rem-sm'
    | 'rem-sm-2'
    | 'rem-md'
    | 'rem-md-2'
    | 'rem-lg'
    | 'rem-xl'
    | 'rem-2xl'
    | 'rem-3xl'
    | 'rem-4xl'
    | 'rem-5xl'
    | 'rem-container-xxs'
    | 'rem-container-xs'
    | 'rem-container-sm'
    | 'rem-container-md'
    | 'rem-container-lg'
    | 'rem-container-xl'
    | 'rem-container-2xl'
    | 'rem-container-3xl'

  /**
   * @description Breakpoint SCSS vars used for media queries and responsive layout control.
   * @example ```scss
   * @media screen and (min-width: $screen-md) {
   *   .sidebar {
   *     display: block;
   *   }
   * }
   * ```
   * @category responsive
   * @tags breakpoint, media query, responsive, screen
   */
  export type MagnetoUIScreen = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

  /**
   * @description Shadow SCSS vars for consistent elevation and depth effects in components.
   * @example ```scss
   * .card {
   *   box-shadow: $shadow-10;
   * }
   * ```
   * @category visual
   * @tags shadow, elevation, depth, box-shadow
   */
  export type MagnetoUIShadow = '10' | '20' | '30' | 'inherit' | 'none'

  /**
   * @description Text SCSS vars for consistent font sizes.
   * @example ```scss
   * .title {
   *   font-size: $text-xl;
   * }
   * ```
   * @category typography
   * @tags text, typography, font, size, weight, line-height
   */
  export type MagnetoUIText = 'sm-2' | 'md' | 'md-2' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

  /**
   * @description Weight SCSS vars for consistent font weights.
   * @example ```scss
   * .title {
   *   font-size: $weight-normal;
   * }
   * ```
   * @category typography
   * @tags text, typography, font, size, weight, line-height
   */
  export type MagnetoUIWeight = 'normal' | 'bold' | 'black'
}
