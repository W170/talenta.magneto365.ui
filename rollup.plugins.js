import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import path from 'path'
import dotEnv from 'dotenv'

export const MAIN_PLUGINS = [
  peerDepsExternal(),
  alias({
    entries: [
      { find: /^@\/(.*)/, replacement: path.resolve(__dirname, 'src/$1') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@tokens', replacement: path.resolve(__dirname, 'src/shared/stylesheets/tokens/_index.scss') }
    ]
  }),
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
  copy({
    targets: [{ src: 'src/shared/stylesheets/tokens/**/*', dest: 'dist/tokens' }],
    hook: 'buildEnd'
  })
]
