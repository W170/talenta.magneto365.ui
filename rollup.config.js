import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import stringHash from 'string-hash'
import dotEnv from 'dotenv'
import path from 'path'
import packageJson from './package.json'
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
        destDir: 'dist/assets',
        publicPath: dotEnv.config().parsed.ASSETS_CDN_URL,
        limit: 0,
        emitFiles: true
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        autoModules: false,
        onlyModules: false,
        modules: {
          generateScopedName: (name, filename, css) => {
            if (filename.includes('global')) {
              return name
            }
            const hash = stringHash(css).toString(36).substring(0, 5)
            const { base } = path.parse(
              filename.replace(/\.modules?\.scss/g, '').replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
            )
            return `mg_${base}_${name}_${hash}`.replace(/_{2,}/g, '_')
          }
        },
        extract: 'css/magneto.ui.lib.min.css',
        extensions: ['.module.scss', '.modules.scss'],
        use: ['sass'],
        minimize: true,
        sourceMap: false
      })
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
  }
]
