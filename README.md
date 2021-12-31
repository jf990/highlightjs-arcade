# highlightjs-arcade

[![License](https://badgen.net/badge/license/Apache-2.0/blue)](https://github.com/jf990/highlightjs-arcade/blob/master/LICENSE)
[![Language](https://badgen.net/badge/language/Arcade-1.16.0/purple)](https://developers.arcgis.com/arcade/)

> NOTE: ArcGIS Arcade official syntax highlighting is at https://github.com/highlightjs/highlight.js/blob/main/src/languages/arcade.js, this repo is only a work in progress and is not the official.

Support for using `highlight.js` to syntax highlight Esri's ArcGIS Arcade scripts. See https://highlightjs.org/ for more information about highlight.js. See [ArcGIS Arcade](https://developers.arcgis.com/arcade/) for more information about the ArcGIS Arcade scripting language.

## Installation

Include the `highlight.js` script package in your webpage or node app, load this module and register it with `hljs`.

This ArcGIS Arcade module is not part of the standard distribution and must be loaded separately. The module name is `arcade.min.js` or `arcade`, depending on how you reference the module from your bundler code.

### Static website

Load the `arcade` module after loading Highlight.js.  Use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the JavaScript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/arcade.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

View a sample of this by loading `index.html` found in the `sample` folder.

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
  src="https://unpkg.com/highlightjs-arcade@1.16.0/dist/arcade.min.js"></script>
```

- More info: <https://unpkg.com>

### With Node.js or another build system

If you're using Node.js / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
const hljs = require('highlight.js');
const hljsArcade = require('highlightjs-arcade');

hljs.highlightAll();
```

To view a sample of this workflow, you will be required to have previously installed node and webpack.

```bash
cd sample
npm install
npm run build
```

Then view `sample/dist/index.html` from a browser.

## Usage

Once loaded, mark the code you want to highlight with the `language-arcade` class:

```html
<pre><code class="language-arcade">... example arcade code here ...</code></pre>
```

or use JavaScript to dynamically highlight text:

```javascript
hljs.registerLanguage('arcade', window.hljsArcade);
var highlighted = hljs.highlightAuto(text, ["arcade"]);
```

Without specifying the language, Highlight.js will attempt to auto-detect the grammar. To avoid mis-detecting Arcade and getting an unexpected result, always specify `arcade` or `language-arcade`.

For more information, follow instructions at [highlightjs.org](https://highlightjs.org/usage/) to learn how to include the library and CSS and other use cases. See [Getting started](https://github.com/highlightjs/highlight.js#getting-started) for different integration and module options.

## Contributing

[Contributions welcome](https://github.com/esri/contributing). Download this repo and install the dependencies:

```bash
npm install
```

Update `src/language/arcade.js`. Be sure to update the test data `test/markup` and `test/detect` files to include a test for your changes, or create a new test in `spec/arcade-spec.js`. Run the local test with

```bash
npm test
```

The tests must pass!

To build the distribution, follow instructions at [Highlight.js 3rd Party Quick Start](https://github.com/highlightjs/highlight.js/blob/master/extra/3RD_PARTY_QUICK_START.md).

Issue a pull request.

## License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License.
