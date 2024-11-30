export default {
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@forms/(.*)$',
    '^@functions/(.*)$',
    '^@hooks/(.*)$',
    '^@layouts/(.*)$',
    '^@modules/(.*)$',
    '^@styles/(.*)$',
    '^@providers/(.*)$',
    '^@theme/(.*)$',
    '^@fontsource/(.*)$',
    '^[./]',
    '.css'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
