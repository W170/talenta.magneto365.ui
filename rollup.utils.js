import fs from 'fs'

export const listDirectory = (path) => {
  const directs = fs.readdirSync(path, { withFileTypes: true })
  return directs.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name)
}
