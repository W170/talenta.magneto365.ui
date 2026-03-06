import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import dotEnv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)
const packageJson = require('./package.json')

const envConfig = dotEnv.config()
const { ASSETS_CDN_URL = 'https://cdn.example.com/' } = envConfig.parsed || {}

export const MAIN_PLUGINS = [
  peerDepsExternal(),
  alias({
    resolve: ['.ts', '.scss', '.css', '.tsx'],
    entries: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@tokens', replacement: path.resolve(__dirname, './src/shared/stylesheets/tokens/_index.scss') }
    ]
  }),
  resolve(),
  commonjs(),
  url({
    fileName: '[dirname][hash][extname]',
    sourceDir: path.join(__dirname, 'src/assets'),
    destDir: path.join('dist/assets', packageJson.version),
    publicPath: new URL(packageJson.version + '/', ASSETS_CDN_URL).toString(),
    limit: 0,
    emitFiles: true
  }),
  copy({
    targets: [{ src: 'src/shared/stylesheets/tokens/**/*', dest: 'dist/tokens' }],
    hook: 'buildEnd'
  })
]
