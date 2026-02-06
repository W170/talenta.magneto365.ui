# @magneto365-ui/design-tokens

Auto-generated design tokens for Magneto365 UI Library.

## Overview

This package provides design tokens as:

- **TypeScript union types** for type-safe component props
- **SCSS variables and maps** for styling

All tokens are generated from JSON source files in `data/`.

## Installation

```bash
pnpm add @magneto365-ui/design-tokens
```

## Usage

### TypeScript Types

```typescript
import type { MagnetoUIColor, MagnetoUIText, MagnetoUIWeight } from '@magneto365-ui/design-tokens'

interface ITypography {
  color?: MagnetoUIColor // 'blue-dark-500' | 'red-300' | ...
  size?: MagnetoUIText // 'sm-2' | 'md' | 'lg' | 'xl' | ...
  weight?: MagnetoUIWeight // 'normal' | 'bold' | 'black'
}
```

### SCSS Variables

```scss
@use '@magneto365-ui/design-tokens/scss' as tokens;

.my-component {
  color: tokens.$color-blue-dark-500;
  font-size: tokens.$text-xl;
  font-weight: tokens.$weight-bold;
}
```

### SCSS Maps (for dynamic generation)

```scss
@use '@magneto365-ui/design-tokens/scss' as tokens;

.typography {
  @each $size, $value in tokens.$text-map {
    &--size-#{$size} {
      font-size: $value;
    }
  }

  @each $color, $value in tokens.$color-map {
    &--color-#{$color} {
      color: $value;
    }
  }
}
```

## Available Tokens

| Type               | Description     | Values                                             |
| ------------------ | --------------- | -------------------------------------------------- |
| `MagnetoUIColor`   | Brand colors    | 73 colors (blue, green, grey, red, yellow, purple) |
| `MagnetoUIText`    | Font sizes      | 8 sizes (sm-2, md, md-2, lg, xl, 2xl, 3xl, 4xl)    |
| `MagnetoUIWeight`  | Font weights    | 3 weights (normal, bold, black)                    |
| `MagnetoUIScale`   | Spacing scale   | px/rem values for sizing                           |
| `MagnetoUIGap`     | Gap spacing     | 13 gap values                                      |
| `MagnetoUIMargin`  | Margin spacing  | 14 margin values                                   |
| `MagnetoUIPadding` | Padding spacing | 13 padding values                                  |
| `MagnetoUIRadius`  | Border radius   | 13 radius values                                   |
| `MagnetoUIBorder`  | Border width    | 4 border widths                                    |
| `MagnetoUIShadow`  | Box shadows     | 5 shadow levels                                    |
| `MagnetoUIOpacity` | Opacity levels  | 13 opacity values                                  |
| `MagnetoUIScreen`  | Breakpoints     | 8 responsive breakpoints                           |

## Token Generation

Tokens are auto-generated from JSON files. To regenerate:

```bash
pnpm generate
```

This creates:

- `src/index.ts` - TypeScript union types with JSDoc
- `src/scss/` - SCSS variables, maps, and utility classes

## Architecture

```
data/               # JSON source (12 files)
  ├── color.json
  ├── text.json
  └── ...

scripts/
  └── generateTokens.js   # Generation script

src/                # Generated outputs (DO NOT EDIT)
  ├── index.ts      # TypeScript types
  └── scss/
      ├── _index.scss
      ├── _color.scss
      └── ...
```

## Adding New Tokens

1. Edit JSON files in `data/`
2. Run `pnpm generate`
3. Commit both JSON source and generated outputs
