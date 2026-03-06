import path from 'path'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'rollup-plugin-sass'
import postcss from 'postcss'
import postcssModules from 'postcss-modules'
import autoprefixer from 'autoprefixer'
import stringHash from 'string-hash'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootInput = 'src/index.ts'

// Get all component entry points
const componentEntries = Object.fromEntries(
  glob.sync('src/components/*/index.ts').map((file) => [
    // Extract component name from path: src/components/Input/index.ts -> Input
    path.basename(path.dirname(file)),
    // Full path to entry file
    file
  ])
)

// Combine main entry + component entries
const allEntries = {
  index: rootInput,
  ...Object.fromEntries(Object.entries(componentEntries).map(([name, file]) => [`components/${name}/index`, file]))
}

// CSS module scoped name generation
const cssMapModules = new Map()

export default () => {
  return [
    // Main bundle (ESM + CJS)
    {
      input: allEntries,
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
      external: [
        'react',
        'react-dom',
        '@magneto365-ui/shared',
        '@magneto365-ui/primitives',
        '@magneto365-ui/design-tokens'
      ],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src'),
          destDir: path.join('dist/assets'),
          limit: 0,
          emitFiles: true
        }),
        typescript({
          tsconfig: './tsconfig.json',
          declaration: false,
          outDir: undefined,
          declarationDir: undefined,
          emitDeclarationOnly: false
        }),
        sass({
          // 🎯 Use modern Sass API (eliminates deprecation warnings)
          api: 'modern',

          // Sass compiler options
          options: {
            // loadPaths replaces includePaths in modern API
            loadPaths: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, '../design-tokens/src'),
              path.resolve(__dirname, '../../node_modules')
            ],
            // Don't compress CSS yet (generateComponentCss.js will minify)
            style: 'expanded'
          },

          // Extract all CSS to single file (same as before)
          output: path.join('dist', 'esm', 'styles.css'),

          // 🔧 Processor: Transform CSS Modules using postcss-modules
          processor: async (css, id) => {
            console.log(`[sass-processor] Processing: ${id}`)

            // Object to capture CSS module class mappings
            let cssModulesJSON = {}

            try {
              // Process CSS with postcss-modules to generate scoped class names
              const result = await postcss([
                postcssModules({
                  // Generate scoped class name: mg_inputs_component_className_hash
                  generateScopedName: (name, filename, css) => {
                    // Skip scoping for global styles
                    if (filename.includes('global')) {
                      return name
                    }

                    // Generate consistent hash from CSS content
                    const hash = stringHash(css).toString(36).substring(0, 5)

                    // Check for cached hash (maintains consistency across builds)
                    const mappedHash = cssMapModules.get(name)
                    if (mappedHash === null) {
                      cssMapModules.set(name, hash)
                    }

                    // Extract base filename: Input.module.scss → input
                    const { base } = path.parse(
                      filename
                        .replace(/\.modules?\.scss/g, '')
                        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
                    )

                    // Return scoped class: mg_inputs_input_inputComponent_fx01y
                    return `mg_inputs_${base}_${name}_${mappedHash || hash}`.replace(/_{2,}/g, '_')
                  },

                  // Callback to capture the generated class name mappings
                  getJSON: (cssFilename, json) => {
                    cssModulesJSON = json
                  }
                }),
                autoprefixer()
              ]).process(css, { from: id })

              console.log(
                `[sass-processor] Generated ${Object.keys(cssModulesJSON).length} class mappings for ${path.basename(
                  id
                )}`
              )

              // Return object with CSS and module mappings
              // rollup-plugin-sass will use 'cssModules' property to create .module.scss.js files
              return {
                css: result.css,
                cssModules: cssModulesJSON
              }
            } catch (error) {
              console.error(`[sass-processor] Error processing ${id}:`, error)
              throw error
            }
          }
        })
      ]
    },
    // Type definitions
    {
      input: allEntries,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: path.join('dist', 'types')
      },
      plugins: [
        dts(),
        url({
          fileName: '[dirname][hash][extname]',
          sourceDir: path.join(__dirname, 'src')
        })
      ],
      external: [
        /\.(css|less|scss)$/,
        '@magneto365-ui/shared',
        '@magneto365-ui/primitives',
        '@magneto365-ui/design-tokens'
      ]
    }
  ]
}
