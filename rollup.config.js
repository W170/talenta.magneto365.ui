import path from 'path'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json'
import { MAIN_PLUGINS } from './rollup.plugins'
import { CONFIG_POSTCSS_PLUGIN, GENERATE_MODULES } from './rollup.tools'

export default ({ environment }) => {
  if (environment) return GENERATE_MODULES(environment)
  return [
    {
      input: 'src/index.ts',
      output: [
        {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true
        },
        {
          file: packageJson.module,
          format: 'esm',
          sourcemap: true
        }
      ],
      external: ['antd', 'react', 'axios', 'react-dom'],
      plugins: [
        ...MAIN_PLUGINS,
        CONFIG_POSTCSS_PLUGIN(false),
        typescript({ tsconfig: './tsconfig.json', declaration: true })
      ]
    },
    {
      input: 'dist/esm/types/index.d.ts',
      output: [
        {
          file: 'dist/index.d.ts',
          format: 'esm',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      ],
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
      input: 'src/@types/tokens.d.ts',
      output: [
        {
          file: 'dist/tokens.d.ts',
          format: 'esm'
        }
      ],
      plugins: [dts()]
    }
  ]
}
