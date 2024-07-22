import fs from 'fs'
import path from 'path'

const packageJsonPath = path.resolve('package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const [, , bumpType = 'patch'] = process.argv
const versionParts = packageJson.version.split('.').map(Number)

switch (bumpType) {
  case 'major':
    versionParts[0]++
    versionParts[1] = 0
    versionParts[2] = 0
    break
  case 'minor':
    versionParts[1]++
    versionParts[2] = 0
    break
  case 'patch':
  default:
    versionParts[2]++
    break
}

const newVersion = versionParts.join('.')
packageJson.version = newVersion

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n')

console.log(`Version bumped to ${newVersion}`)
