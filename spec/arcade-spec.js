/**
 * Unit test for highlight grammar:
 * - verifies language is loaded via highlightjs core
 * - verifies expected version
 * - verifies expected highlight grammar
 */
const hljs = require("highlight.js/lib/core");
const arcade = require("../src/languages/arcade");
const fs = require("fs");
const path = require("path");
const languageName = "arcade";
const testSourcePath = "../test/markup/" + languageName + "/";
const testFiles = ["sample", "profile"];
hljs.registerLanguage(languageName, arcade);

describe("highlight " + languageName, () => {
  it("defines " + languageName, () => {

    // highlight has language defined
    const hljsArcade = hljs.getLanguage(languageName);
    expect(hljsArcade).not.toBe(null);
  });

  it("highlights " + languageName, () => {
    const input = "return FeatureSet($map, [\"POPULATION\", \"ELECTION-DATA\"]);";
    const expected = "<span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">FeatureSet</span>(<span class=\"hljs-symbol\">$map</span>, [<span class=\"hljs-string\">&quot;POPULATION&quot;</span>, <span class=\"hljs-string\">&quot;ELECTION-DATA&quot;</span>]);";
    // highlight the test string
    const result = hljs.highlight(input, { language: languageName, ignoreIllegals: true });
    expect(result.language).toBe(languageName);
    expect(result.value).toBe(expected);
  });

  it("highlights test files " + languageName, () => {

    testFiles.forEach((file) => {
      const testFileSourcePath = testSourcePath + file + ".txt";
      const testFileExpectedPath = testSourcePath + file + ".expect.txt";

      // read the test data from a file
      const sample = fs.readFileSync(
        path.resolve(__dirname, testFileSourcePath),
        "utf-8"
      );
  
      // highlight the test data
      const result = hljs.highlight(sample, { language: languageName, ignoreIllegals: true });
      expect(result.language).toBe(languageName);
  
      // verify the highlighting is what is expected
      const expected = fs.readFileSync(
        path.resolve(__dirname, testFileExpectedPath),
        "utf-8"
      );
      expect(result.value).toBe(expected);
    });
  });
});
