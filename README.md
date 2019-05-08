# Lyric Book

<p align="center">
  <img src="https://raw.githubusercontent.com/medolino/lyric-book/master/img/app_screenshot.png" alt="Application example" width="721" height="auto" />
</p>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Configuration

### Application config

Default config is provided in `config/default.js`.

To override it create new file `config/default.local.js` and export properties you want to change.

Config example:

```js
module.exports = {
  LOGO_PATH: '"./assets/custom-logo.png"',
  APP_NAME: 'Custom App Name',
};
```

### Lyrics

Copy lyrics example file `src/assets/custom/lyrics.json.example` to `src/assets/custom/lyrics.json` and follow the example to add lyrics.




