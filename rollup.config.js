import path from 'path'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import { CONFIG_POSTCSS_PLUGIN } from './rollup.tools'
import { getAllEntryPoints } from './rollup.input'
import { MAIN_PLUGINS } from './rollup.plugins'

const domainInputs = getAllEntryPoints('./src/components/Domain')

const inputEntries = [...domainInputs, 'src/index.ts']

export default () => {
  // TODO: make css for entries.
  // if (environment) return GENERATE_MODULES(environment)
  return [
    {
      input: inputEntries,
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
      input: inputEntries,
      output: {
        dir: path.join('dist', 'types'),
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
      plugins: [
        dts(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src/assets')
        })
      ],
      external: [/\.(css|less|scss)$/]
    }
  ]
}
