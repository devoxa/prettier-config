// In addition to this config, we also install the "organize-imports" plugin, which makes Prettier
// organize `import`s using the TypeScript language service API (like "Organize Imports" in VS Code).

module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false, // Deprecated
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
}
