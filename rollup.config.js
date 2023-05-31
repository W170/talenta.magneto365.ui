import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json'
import * as path from 'path'

export default [
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
      resolve(),
      commonjs(),
      url({
        fileName: '[dirname][hash][extname]',
        sourceDir: path.join(__dirname, 'src/assets'),
        emitFiles: true
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
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
