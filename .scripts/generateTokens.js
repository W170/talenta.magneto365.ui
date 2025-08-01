const fs = require('fs')
const path = require('path')
const warning = '// Auto-generated DO NOT EDIT\n'

class DesignToken {
  tokensDir = path.resolve(__dirname, '../src/shared/tokens/data')
  scssOutput = path.resolve(__dirname, '../src/shared/stylesheets/tokens')
  typesDir = path.resolve(__dirname, '../src/@types')
  typesDOutput = path.join(this.typesDir, 'tokens.d.ts')
  typesOutput = path.join(__dirname, '../src/shared/tokens/index.ts')

  // Main function
  run() {
    // Get all JSON token files
    const tokenFiles = this.getTokenFiles()
    const scssIndex = []
    const typeDefinitions = []
    const files = []

    // Makes directories to store generated files
    this.prepareOutputDirs()
    // Delete previous types
    this.removePreviousTypesFile()

    for (const file of tokenFiles) {
      const fileName = path.basename(file, '.json')
      const { values, utilities, docs } = this.readJSONfile(file)

      // Flatted object.
      // Example: blue.dark.50 ---> 'blue-dark-50': '#99a4af'
      const flattenTokensWithPrefix = this.toFlatObject(values, { prefix: fileName })
      const flattenTokens = this.toFlatObject(values)

      // Generate an objet with the token key and the SCSS variable final name.
      // Example: 'red-50': 'color-red-50'
      const scssVarsObj = this.toSCSSVarsObj(flattenTokens, fileName)

      // Generate SCSS file per each JSON file
      this.writeScssFile({ fileName, tokens: flattenTokensWithPrefix, scssVarsObj, utilities })
      // Register SCSS into a index SCSS file
      scssIndex.push(`@forward './_${fileName}.scss';`)
      // Save each file data to generate utility classes
      files.push({ fileName, tokens: flattenTokensWithPrefix, scssVarsObj, utilities })

      // Generate export type name. Example: MagnetoUIColor
      const pascalName = this.toPascalCase(`MagnetoUI-${fileName}`)
      // Generate a type and the type documentation in JSDoc way
      const typeDef = this.generateType(flattenTokens, pascalName, docs)
      typeDefinitions.push(typeDef)
    }

    // Generate a TS file containing all tokens in a namespace
    this.writeGlobalTypes(typeDefinitions)
    // Generate a SCSS index file that exports all SCSS vars and utility classes
    this.writeScssIndex(scssIndex)
    // Generate a SCSS file containing all utility classes
    this.writeUtilityClasses(files)

    console.info('✅ Tokens generated')
  }

  // Obtain all token JSON files
  getTokenFiles() {
    return fs
      .readdirSync(this.tokensDir)
      .filter((file) => file.endsWith('.json'))
      .map((file) => path.join(this.tokensDir, file))
  }

  // Makes directories if necessary
  prepareOutputDirs() {
    fs.mkdirSync(this.scssOutput, { recursive: true })
    fs.mkdirSync(this.typesDir, { recursive: true })
  }

  // Remove previous token types definitions
  removePreviousTypesFile() {
    if (fs.existsSync(this.typesDOutput)) fs.unlinkSync(this.typesDOutput)
    if (fs.existsSync(this.typesOutput)) fs.unlinkSync(this.typesOutput)
  }

  // Read the content of the JSON file
  readJSONfile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8')
    const json = JSON.parse(content)
    return {
      docs: json.docs || {},
      values: json.values || {},
      utilities: json.utilities || {}
    }
  }

  // Write in a SCSS file
  writeScssFile(params) {
    const { fileName, tokens, scssVarsObj, utilities } = params

    const filepath = path.join(this.scssOutput, `_${fileName}.scss`)
    const scss = this.generateSCSS(tokens, scssVarsObj, utilities)
    fs.writeFileSync(filepath, scss)
  }

  // Write in a SCSS index file that exports all SCSS files
  writeScssIndex(indexLines) {
    const indexPath = path.join(this.scssOutput, '_index.scss')
    fs.writeFileSync(indexPath, `${warning}${indexLines.join('\n')}\n`)
  }

  // Write in a SCSS file all utility classes
  writeUtilityClasses(files) {
    const filepath = path.join(this.scssOutput, '_utilities.scss')
    const utilityClassesLines = []
    const imports = []

    // Add imports
    files.forEach(({ utilities }) => {
      if (utilities.imports?.length) {
        for (const { file, alias } of utilities.imports) {
          if (imports.includes(file)) continue
          utilityClassesLines.push(`@use '${file}' as ${alias};`)
          if (!imports.includes(file)) imports.push(file)
        }
      }
    })

    utilityClassesLines.push('')

    // Add utility classes
    files.forEach(({ utilities, scssVarsObj, fileName }) => {
      if (utilities.classes?.length) {
        const utilityClasses = this.generateUtilityClasses(fileName, utilities, scssVarsObj)
        utilityClassesLines.push(utilityClasses)
      }
    })

    fs.writeFileSync(filepath, `${warning}${utilityClassesLines.join('\n')}`)
  }

  // Write in a global types file
  writeGlobalTypes(typeDefs) {
    const contentD = `${warning}declare module 'magneto-ui' {\n\n${typeDefs.join('\n')}}\n`
    const content = `${warning}\n${typeDefs.join('\n')}\n`
    fs.writeFileSync(this.typesDOutput, contentD)
    fs.writeFileSync(this.typesOutput, content)
  }

  // Generates a flat object. Example: blue.dark.50 ---> 'blue-dark-50'
  toFlatObject(obj, { prefix = '' } = {}) {
    const result = {}

    const recurse = (curr, currPrefix) => {
      for (const [key, value] of Object.entries(curr)) {
        const newKey = currPrefix ? `${currPrefix}-${key}` : key
        if (typeof value === 'object' && value !== null) {
          recurse(value, newKey)
        } else {
          result[newKey] = value
        }
      }
    }

    recurse(obj, prefix)
    return result
  }

  // Generates an object with the token key and the SCSS variable final name
  toSCSSVarsObj(flatClasses, baseName) {
    return Object.keys(flatClasses).reduce((acc, key) => {
      acc[key] = `${baseName}-${key}`
      return acc
    }, {})
  }

  // Generates a string containing all utility classes
  generateUtilityClasses(fileName, utilities, scssVarsObj) {
    const lines = []

    if (utilities.classes?.length) {
      for (const { prefix, properties, conditions } of utilities.classes) {
        for (const [classKey, varKey] of Object.entries(scssVarsObj)) {
          const { excludeValues, removeFromClass } = conditions || {}

          if (excludeValues?.some((e) => classKey.split('-').includes(e))) continue

          const filteredClassKey = classKey
            .split('-')
            .filter((word) => !removeFromClass?.includes(word))
            .join('-')
          const className = `.${prefix}-${filteredClassKey}`
          const declarations = properties
            .map(
              ({ property, fn }) =>
                `  ${property}: ${fn ? fn.replace(/\((.*?)\)/, `(${fileName}.$${varKey})`) : `${fileName}.$${varKey}`};`
            )
            .join('\n')
          lines.push(`${className} {\n${declarations}\n}`)
        }
        lines.push('')
      }
    }

    return lines.join('\n')
  }

  // Generates a SCSS file with vars and utility classes
  generateSCSS(tokens, scssVarsObj, utilities) {
    const lines = []

    if (utilities.imports?.length) {
      for (const { file, alias } of utilities.imports) {
        lines.push(`@use '${file}' as ${alias};`)
      }
      lines.push('')
    }

    // SCSS vars
    const variables = Object.entries(tokens)
      .map(([key, val]) => `$${key}: ${val};`)
      .join('\n')
    lines.push(variables, '')

    // Map generation
    const mapName = `$${Object.values(scssVarsObj)[0].split('-')[0]}-map`
    const mapEntries = Object.entries(scssVarsObj)
      .map(([key, varName]) => `  ${key}: $${varName}`)
      .join(',\n')
    lines.push(`${mapName}: (\n${mapEntries}\n);`, '')

    return `${warning}${lines.join('\n')}`
  }

  // Generates a type and the type documentation in JSDoc way
  generateType(tokens, typeName, docs) {
    // Documentation of current token
    const docBlock = this.generateDocsBlock(docs)
    const union =
      Object.keys(tokens)
        .map((key) => `'${key}'`)
        .join(' |\n    ') + ';'
    return `${docBlock}  export type ${typeName} =\n    ${union}\n`
  }

  // Generates a JSDoc block
  generateDocsBlock(docs) {
    if (!docs || Object.keys(docs).length === 0) return ''
    const lines = ['  /**']
    for (const [key, value] of Object.entries(docs)) {
      const entries = Array.isArray(value) ? value : [value]
      for (const entry of entries) {
        lines.push(this.formatJsDocLine(key, entry))
      }
    }
    lines.push('   */\n')
    return lines.join('\n')
  }

  // Generates formatted JSDoc lines
  formatJsDocLine(key, value) {
    if (typeof value !== 'string') return `   * @${key} ${value}`
    const lines = value.split('\n')
    return lines.map((line, i) => `   * ${i === 0 ? `@${key} ${line}` : line}`).join('\n')
  }

  // Converts a string to PascalCase
  toPascalCase(str) {
    return str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
  }
}

new DesignToken().run()
