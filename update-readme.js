import { promises as fs } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// Определение текущего каталога
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Путь к файлам
const packageJsonPath = resolve(__dirname, 'package.json')
const readmePath = resolve(__dirname, 'README.md')

// Асинхронная функция для обновления README
async function updateReadme() {
  // Загрузка package.json
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))

  // Извлечение peerDependencies
  const peerDependencies = packageJson.peerDependencies || {}

  // Формирование команд для установки
  const commands = Object.keys(peerDependencies)
    .map((dep) => `npm install ${dep} --save`)
    .join('\n')

  // Формирование секции установки
  const installSection = `
## Installing dependencies

To work correctly you need to install the following dependencies:

\`\`\`bash
${commands}
\`\`\`
`

  // Чтение содержимого README.md
  let readmeContent = await fs.readFile(readmePath, 'utf8')

  // Определение места для вставки
  const insertionPoint = '# IMPORTANT' // Название секции, после которой нужно вставить новый текст

  if (readmeContent.includes(insertionPoint)) {
    // Найти позицию вставки
    const insertionIndex =
      readmeContent.indexOf(insertionPoint) + insertionPoint.length

    // Сформировать обновлённое содержание
    const beforeInsertion = readmeContent.slice(0, insertionIndex).trim()
    const newContent = beforeInsertion + '\n\n' + installSection

    // Записать изменённое содержимое обратно в файл
    await fs.writeFile(readmePath, newContent, 'utf8')
    console.log('README обновлён с командой установки зависимостей.')
  } else {
    console.log('Не удалось найти секцию для вставки в README.')
  }
}

// Вызов асинхронной функции
updateReadme().catch(console.error)
