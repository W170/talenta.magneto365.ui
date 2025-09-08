import path from 'path'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import { CONFIG_POSTCSS_PLUGIN, getFolderNameBeforeIndex } from './rollup.tools'
import { getAllEntryPoints } from './rollup.input'
import { MAIN_PLUGINS } from './rollup.plugins'

const rootInput = 'src/index.ts'

const domainComponents = getAllEntryPoints('./src/components/Domain')

export default () => {
  // TODO: make css for entries.
  // if (environment) return GENERATE_MODULES(environment)
  return [
    ...domainComponents.map((input) => ({
      input: input,
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
          sourcemap: true
        }
      ],
      external: ['react', 'axios', 'react-dom'],
      plugins: [
        ...MAIN_PLUGINS,
        CONFIG_POSTCSS_PLUGIN(false, `css/magneto.ui.${getFolderNameBeforeIndex(input)}.min.css`),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        })
      ]
    })),
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
          sourcemap: true
        }
      ],
      external: ['react', 'axios', 'react-dom'],
      plugins: [
        ...MAIN_PLUGINS,
        CONFIG_POSTCSS_PLUGIN(false, `css/magneto.ui.lib.min.css`),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        })
      ]
    },
    // types
    {
      input: [rootInput, ...domainComponents],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
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
    }
  ]
}
