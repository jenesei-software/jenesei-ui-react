import { promises as fs } from 'fs'
import path from 'path'

// Определение асинхронной функции
async function updateReadme() {
  // Путь к файлам
  const packageJsonPath = path.resolve(__dirname, 'package.json')
  const readmePath = path.resolve(__dirname, 'README.md')

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
## Установка зависимостей

Для корректной работы вам необходимо установить следующие зависимости:

\`\`\`bash
${commands}
\`\`\`
`

  // Чтение содержимого README.md
  let readmeContent = await fs.readFile(readmePath, 'utf8')

  // Определение места для вставки
  const insertionPoint = '## Дополнительная информация' // Название секции, перед которой нужно вставить новый текст

  if (readmeContent.includes(insertionPoint)) {
    // Найти позицию вставки
    const insertionIndex = readmeContent.indexOf(insertionPoint)

    // Вставить секцию установки перед найденной секцией
    readmeContent =
      readmeContent.slice(0, insertionIndex) +
      installSection +
      '\n' +
      readmeContent.slice(insertionIndex)

    // Записать изменённое содержимое обратно в файл
    await fs.writeFile(readmePath, readmeContent, 'utf8')
    console.log('README обновлён с командой установки зависимостей.')
  } else {
    console.log('Не удалось найти секцию для вставки в README.')
  }
}

// Вызов асинхронной функции
updateReadme().catch(console.error)
