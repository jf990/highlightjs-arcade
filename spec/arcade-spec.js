const hljs = require("highlight.js/lib/highlight");
const { definer: arcade } = require("../arcade");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("arcade", arcade);

describe("respec-highlight bundle", () => {
  it("defines arcade", () => {

    // highlight has Arcade defined
    const arcade = hljs.getLanguage("arcade");
    expect(arcade).toBeDefined();

  });

  it("highlights arcade", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "arcade",
    ]);
    expect(language).toBe("arcade");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });

  it("highlights arcade 1.7", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, "./input.1.7.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "arcade",
    ]);
    expect(language).toBe("arcade");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.1.7.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
