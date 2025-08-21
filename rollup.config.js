import path from 'path'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import { CONFIG_POSTCSS_PLUGIN } from './rollup.tools'
import { getAllEntryPoints } from './rollup.input'
import { MAIN_PLUGINS } from './rollup.plugins'

const rootInput = 'src/index.ts'
const domainInputs = getAllEntryPoints('./src/components/Domain')

const allInputs = [...domainInputs, rootInput]

export default () => {
  // TODO: make css for entries.
  // if (environment) return GENERATE_MODULES(environment)
  return [
    {
      input: allInputs,
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
        CONFIG_POSTCSS_PLUGIN(false),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        })
      ]
    },
    {
      input: 'src/index.ts',
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
      input: domainInputs,
      output: {
        dir: path.join('dist', 'types')
      },
      plugins: [dts()]
    }
  ]
}
