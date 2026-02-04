import path from 'path'
import { fileURLToPath } from 'url'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import stringHash from 'string-hash'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootInput = 'src/index.ts'

// CSS module scoped name generation
const cssMapModules = new Map()

export default () => {
  return [
    // Main bundle (ESM + CJS)
    {
      input: rootInput,
      output: [
        {
          dir: path.join('dist', 'esm'),
          format: 'esm',
          preserveModulesRoot: 'src',
          preserveModules: true,
          sourcemap: true
        },
        {
          dir: path.join('dist', 'cjs'),
          format: 'cjs',
          preserveModulesRoot: 'src',
          preserveModules: true,
          sourcemap: true,
          exports: 'named'
        }
      ],
      external: ['react', 'react-dom', '@magneto365-ui/shared'],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src'),
          destDir: path.join('dist/assets'),
          limit: 0,
          emitFiles: true
        }),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        }),
        postcss({
          plugins: [autoprefixer],
          autoModules: false,
          onlyModules: false,
          modules: {
            generateScopedName: (name, filename, css) => {
              if (filename.includes('global')) {
                return name
              }
              const hash = stringHash(css).toString(36).substring(0, 5)
              const mappedHash = cssMapModules.get(name)
              if (mappedHash === null) {
                cssMapModules.set(name, hash)
              }
              const { base } = path.parse(
                filename.replace(/\.modules?\.scss/g, '').replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
              )
              return `mg_${base}_${name}_${mappedHash || hash}`.replace(/_{2,}/g, '_')
            }
          },
          extract: 'styles.css',
          extensions: ['.css', '.scss'],
          minimize: true,
          sourceMap: false,
          use: {
            sass: {
              includePaths: [path.resolve(__dirname, 'src')]
            }
          }
        })
      ]
    },
    // Type definitions
    {
      input: rootInput,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: path.join('dist', 'types')
      },
      plugins: [
        dts(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src')
        })
      ],
      external: [/\.(css|less|scss)$/, '@magneto365-ui/shared']
    }
  ]
}
