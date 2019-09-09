/**
 * Demonstration using webpack with Highlight.js to test a local language definition.
 */
const hljs = require('highlight.js');
const hljsArcade = require('../../arcade.js');

hljsArcade(hljs);
hljs.initHighlightingOnLoad();
