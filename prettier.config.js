// In addition to this config, we also install the "organize-imports" plugin, which makes Prettier
// organize `import`s using the TypeScript language service API (like "Organize Imports" in VS Code).
// (This is also where the peer dependency on TypeScript comes from.)

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
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',

  overrides: [
    // Disable formatting JSONC with trailing commas (discouraged by the format)
    // See https://github.com/prettier/prettier/issues/15956#issuecomment-1987146114
    { files: ['*.jsonc'], options: { trailingComma: 'none' } },
  ],
}
