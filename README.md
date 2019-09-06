# highlightjs-arcade

[![License](https://badgen.net/badge/license/Apache-2.0/blue)](https://github.com/jf990/highlightjs-arcade/blob/master/LICENSE)
[![Language](https://badgen.net/badge/language/Arcade-1.7.0/purple)](https://developers.arcgis.com/arcade/)

highlight.js language definition for Esri's ArcGIS Arcade expression language. See [ArcGIS Arcade](https://developers.arcgis.com/arcade/) for language details. See https://highlightjs.org/ for more information about highlight.js.

## Usage

Follow instructions at [highlightjs](https://highlightjs.org/) to learn how to include the library and CSS. Then include Arcade as a registered language.

Mark the code you want to highlight with the Arcade class:

```html
<pre><code class="arcade">...</code></pre>
```

or use JavaScript to dynamically highlight text:

```javascript
hljs.registerLanguage('arcade', window.hljsDefineArcade);
var highlighted = hljs.highlightAuto(text, ["arcade"]);
```

### Webpage

Include `highlight.js` distribution on your webpage, get the standard highlight.js distribution and then add the Arcade language highlighter from this repo:

```html
<link rel="stylesheet" href="/path/to/css/default.css">
<script src="/path/to/highlight.js/highlight.pack.js"></script>
<script src="/path/to/highlightjs-arcade/arcade.js"></script>
<script>
    hljs.registerLanguage("arcade", window.hljsDefineArcade);
    hljs.initHighlightingOnLoad();
</script>
```

### webpack / rollup / browserify / node

```javascript
const hljs = require('highlightjs');
const hljsArcade = require('highlightjs-arcade');

hljsArcade(hljs);
hljs.initHighlightingOnLoad();
```

## Contributing

Download this repo and install the dependencies:

```bash
npm install
```

Update `arcade.js`. Be sure to update the test data `input.txt` to include a test for your changes, or create a new test in `arcade-spec.js`. The tests must pass!

```bash
npm test
```

Issue a pull request.

## License

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
