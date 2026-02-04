import path from 'path'
import { fileURLToPath } from 'url'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootInput = 'src/index.ts'

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
      external: ['react', 'react-dom'],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
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
      plugins: [dts()],
      external: ['react', 'react-dom']
    }
  ]
}
