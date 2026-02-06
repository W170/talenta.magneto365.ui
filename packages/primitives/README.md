# @magneto365-ui/primitives

Core primitive components for Magneto365 UI with automatic CSS loading.

## Installation

```bash
pnpm add @magneto365-ui/primitives @magneto365-ui/design-tokens
# or
npm install @magneto365-ui/primitives @magneto365-ui/design-tokens
# or
yarn add @magneto365-ui/primitives @magneto365-ui/design-tokens
```

## Usage

### Import Components with Auto CSS

Each component automatically loads its CSS via side effects - no manual CSS imports needed!

```typescript
import { LogoComponent } from '@magneto365-ui/primitives/Logo'
import { Button } from '@magneto365-ui/primitives/Button'
import { Typography } from '@magneto365-ui/primitives/Typography'

// CSS automatically included ✅
// Renders with styles applied
function MyApp() {
  return (
    <>
      <LogoComponent src="/logo.png" alt="My Logo" />
      <Button onClick={handleClick}>Click Me</Button>
      <Typography.Title level={1}>Hello World</Typography.Title>
    </>
  )
}
```

### Design Tokens Required

Components use CSS variables from `@magneto365-ui/design-tokens`. Load the design tokens CSS in your app root:

```typescript
// App root or main entry point
import '@magneto365-ui/design-tokens/dist/esm/scss/_index.css'

// Or in your main CSS file:
// @import '@magneto365-ui/design-tokens/dist/esm/scss/_index.css';
```

### Available Components

| Component  | Import Path                            | Description                                    |
| ---------- | -------------------------------------- | ---------------------------------------------- |
| Image      | `@magneto365-ui/primitives/Image`      | Responsive image component                     |
| Logo       | `@magneto365-ui/primitives/Logo`       | Logo component with fallback                   |
| DotsLoader | `@magneto365-ui/primitives/DotsLoader` | Animated dots loading indicator                |
| FlatLoader | `@magneto365-ui/primitives/FlatLoader` | Flat progress loader                           |
| Icon       | `@magneto365-ui/primitives/Icon`       | Icon component                                 |
| Avatar     | `@magneto365-ui/primitives/Avatar`     | User avatar component                          |
| BarLoader  | `@magneto365-ui/primitives/BarLoader`  | Progress bar loader                            |
| Loading    | `@magneto365-ui/primitives/Loading`    | Generic loading component                      |
| Portal     | `@magneto365-ui/primitives/Portal`     | Portal for rendering outside DOM hierarchy     |
| Badge      | `@magneto365-ui/primitives/Badge`      | Badge/notification indicator                   |
| Divider    | `@magneto365-ui/primitives/Divider`    | Visual divider                                 |
| Tag        | `@magneto365-ui/primitives/Tag`        | Tag component for labels                       |
| Button     | `@magneto365-ui/primitives/Button`     | Button component with variants                 |
| Typography | `@magneto365-ui/primitives/Typography` | Text components (Title, Text, Paragraph, Link) |

### TypeScript Support

Full TypeScript support with exported types:

```typescript
import type { ILogoComponent } from '@magneto365-ui/primitives/Logo'
import type { IButton } from '@magneto365-ui/primitives/Button'
import type { ITypographyTitle, ITypographyText } from '@magneto365-ui/primitives/Typography'

const logoProps: ILogoComponent = {
  src: '/logo.png',
  alt: 'Company Logo'
}
```

### Manual CSS Control (Advanced)

If you need to disable automatic CSS loading:

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false // Disable side effects
      }
    }
  }
}

// Then manually import CSS
import { Logo } from '@magneto365-ui/primitives/Logo'
import '@magneto365-ui/primitives/css/Logo.min.css'
```

### Bundle Size

Each component includes only its own CSS:

- **Logo**: ~226 B CSS
- **Button**: ~428 B CSS
- **Typography**: ~13.9 KB CSS
- **Icon**: ~319 B CSS
- **Avatar**: ~521 B CSS
- **Badge**: ~559 B CSS
- **Tag**: ~337 B CSS
- **Divider**: ~86 B CSS
- **Image**: ~143 B CSS
- **Loading**: ~176 B CSS
- **DotsLoader**: ~347 B CSS
- **FlatLoader**: ~283 B CSS
- **BarLoader**: ~631 B CSS

**Total** (all 13 components with CSS): ~18 KB CSS

Only components you import are included in your bundle!

## Migration from v2

### Old Approach (v2)

```typescript
import { Logo, Button, Typography } from 'magneto365.ui'
import 'magneto365.ui/dist/magneto.ui.lib.min.css' // All library CSS
```

### New Approach (v3)

```typescript
// Per-component imports with auto CSS
import { LogoComponent } from '@magneto365-ui/primitives/Logo'
import { Button } from '@magneto365-ui/primitives/Button'
import { Typography } from '@magneto365-ui/primitives/Typography'

// Design tokens CSS (once in app root)
import '@magneto365-ui/design-tokens/dist/esm/scss/_index.css'

// No manual component CSS imports needed!
```

### Benefits

- ✅ **Better Tree-Shaking**: Only bundle components you use
- ✅ **Smaller Bundles**: Load only necessary CSS
- ✅ **Automatic CSS**: No manual CSS imports per component
- ✅ **Type-Safe**: Full TypeScript support with design tokens
- ✅ **Isolated Components**: Each component fully self-contained

## Contexts, Hooks, and HOCs

Non-component utilities are still available from the main package (planned for future release):

```typescript
import { useMediaQuery, useClickOutside, ResponsiveContext, MagnetoUIProvider } from '@magneto365-ui/primitives'
```

## Development

```bash
# Build package
pnpm build

# Build rollup only
pnpm build:rollup

# Extract per-component CSS
pnpm build:css

# Run tests
pnpm test

# Lint code
pnpm lint

# Clean build artifacts
pnpm clean
```

## Architecture

This package uses a custom build process:

1. **Rollup** compiles TypeScript and SCSS into JS/CSS bundles
2. **CSS Extraction Script** splits the bundled CSS into per-component files
3. **CSS Imports** are automatically injected into component entry points
4. **Side Effects** configuration ensures CSS loads when components are imported

### File Structure

```
dist/
├── css/                    # Per-component CSS files
│   ├── Logo.min.css
│   ├── Button.min.css
│   └── ...
├── esm/                    # ES Module build
│   ├── components/
│   │   └── Logo/
│   │       ├── Logo.component.js
│   │       ├── Logo.module.scss.js
│   │       └── index.js    # Imports ../../../css/Logo.min.css
│   └── index.js
├── cjs/                    # CommonJS build (same structure)
└── types/                  # TypeScript declarations
```

## License

Proprietary - Magneto365
