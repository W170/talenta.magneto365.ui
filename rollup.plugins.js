import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import path from 'path'
import dotEnv from 'dotenv'
import packageJson from './package.json'

export const MAIN_PLUGINS = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  url({
    fileName: '[dirname][hash][extname]',
    sourceDir: path.join(__dirname, 'src/assets'),
    destDir: path.join('dist/assets', packageJson.version),
    publicPath: path.join(dotEnv.config().parsed.ASSETS_CDN_URL, packageJson.version, '/'),
    limit: 0,
    emitFiles: true
  }),
  copy({
    targets: [{ src: 'src/shared/stylesheets/tokens/**/*', dest: 'dist/tokens' }],
    hook: 'buildEnd'
  })
]
