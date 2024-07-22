import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { inc } from 'semver'

const versionType = process.argv[2] || 'patch'
const packageJsonPath = join(__dirname, 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'))

packageJson.version = inc(packageJson.version, versionType)

writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(`Version bumped to ${packageJson.version}`)
