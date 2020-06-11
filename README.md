<!-- Title -->
<h1 align="center">
  prettier-config
</h1>

<!-- Description -->
<h4 align="center"> 
  The <a href="https://prettier.io/docs/en/configuration.html#sharing-configurations">sharable configuration</a>
  for <a href="https://prettier.io/">Prettier</a> used in all Devoxa projects
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@devoxa/prettier-config">
    <img
      src="https://img.shields.io/npm/v/@devoxa/prettier-config?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://app.circleci.com/pipelines/github/devoxa/prettier-config?branch=master">
    <img
      src="https://img.shields.io/circleci/build/github/devoxa/prettier-config/master?style=flat-square"
      alt="Build Status"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#extending">Extending</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

```bash
yarn add --dev prettier @devoxa/prettier-config
```

## Usage

To enable the rules, add a `prettier` property in your `package.json`. See the
[Prettier configuration docs](https://prettier.io/docs/en/configuration.html) for more details.

```json
"prettier": "@devoxa/prettier-config"
```

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is
required, it is possible. To extend a configuration you will need to use a `prettier.config.js` file
that exports an object:

```javascript
module.exports = {
  ...require('@devoxa/prettier-config'),
  semi: true,
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.david-reess.de"><img src="https://avatars3.githubusercontent.com/u/4615516?v=4" width="75px;" alt=""/><br /><sub><b>David Reeß</b></sub></a><br /><a href="https://github.com/devoxa/prettier-config/commits?author=queicherius" title="Code">💻</a> <a href="https://github.com/devoxa/prettier-config/commits?author=queicherius" title="Documentation">📖</a> <a href="https://github.com/devoxa/prettier-config/commits?author=queicherius" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT
