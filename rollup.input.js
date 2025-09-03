import fs from 'fs'
import path from 'path'

const getNameComponent = (file) => file.match(/\/([^\/]+)\/index\.ts$/)[1]

/**
 * lookup for every entry in the directory recursive.
 * @param {directory name} dir
 * @returns
 */
export function getAllEntryPoints(dir) {
  const entries = []
  const files = fs.readdirSync(dir)
  const hasIndex = files.some((file) => file === 'index.ts' || file === 'index.tsx')
  for (const file of files) {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory() && !hasIndex) {
      entries.push(...getAllEntryPoints(fullPath))
    } else if (file === 'index.ts' || file === 'index.tsx') {
      entries.push({ input: fullPath, name: getNameComponent(fullPath) })
    }
  }
  return entries
}
