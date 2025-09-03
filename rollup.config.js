import path from 'path'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import { CONFIG_POSTCSS_PLUGIN } from './rollup.tools'
import { getAllEntryPoints } from './rollup.input'
import { MAIN_PLUGINS } from './rollup.plugins'

const rootInput = 'src/index.ts'

const domainComponents = getAllEntryPoints('./src/components/Domain')

console.log(domainComponents)

export default () => {
  // TODO: make css for entries.
  // if (environment) return GENERATE_MODULES(environment)
  return [
    {
      input: rootInput,
      output: [
        {
          dir: path.join('dist', 'esm'),
          format: 'esm',
          sourcemap: true
        },
        {
          dir: path.join('dist', 'cjs'),
          format: 'cjs',
          sourcemap: true
        }
      ],
      external: ['react', 'axios', 'react-dom'],
      plugins: [
        ...MAIN_PLUGINS,
        CONFIG_POSTCSS_PLUGIN(false, 'css/magneto.ui.lib.min.css'),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        })
      ]
    },
    // build domain components
    ...domainComponents.map(({ name, input }) => ({
      input,
      output: [
        {
          dir: path.join('dist', 'esm'),
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true
        },
        {
          dir: path.join('dist', 'cjs'),
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true
        }
      ],
      external: ['react', 'axios', 'react-dom'],
      plugins: [
        ...MAIN_PLUGINS,
        CONFIG_POSTCSS_PLUGIN(false, `css/magneto.ui.${name}.min.css`),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        })
      ]
    })),
    // types
    {
      input: rootInput,
      output: {
        dir: path.join('dist', 'types')
      },
      plugins: [
        dts(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src/assets')
        })
      ],
      external: [/\.(css|less|scss)$/]
    },
    {
      input: domainComponents.map(({ input }) => input),
      output: {
        dir: path.join('dist', 'types')
      },
      plugins: [dts()]
    }
  ]
}
