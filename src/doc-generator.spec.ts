import { DocGenerator } from "./doc-generator";

describe("DocGenerator", () => {
  it("generates a minimal documentation", () => {
    const documentation = new DocGenerator({}).generate();

    const expectedDocumentation =
      "# Default documentation\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name", () => {
    const documentation = new DocGenerator({
      title: "My awesome doc",
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and description", () => {
    const documentation = new DocGenerator({
      title: "My awesome doc",
      description: "My awesome doc has a cool description",
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "My awesome doc has a cool description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and a gherkin description", () => {
    const gherkinFileContent =
      "Feature: My feature file with scenarios\n\n" +
      "  Scenario: We doin stuff here\n" +
      "    Given something\n" +
      "    When this happens\n" +
      "    Then we have stuff\n";

    const documentation = new DocGenerator({
      title: "My awesome doc",
      gherkin: gherkinFileContent,
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "```gherkin\n" +
      "Feature: My feature file with scenarios\n\n" +
      "  Scenario: We doin stuff here\n" +
      "    Given something\n" +
      "    When this happens\n" +
      "    Then we have stuff\n" +
      "```\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an input description", () => {
    const documentation = new DocGenerator({
      title: "My awesome doc",
      inputDescription: "My Input description",
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "My Input description\n" +
      "\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an input type", () => {
    const inputType = "{\n" + '  "foo": string\n' + "}\n";

    const documentation = new DocGenerator({
      title: "My awesome doc",
      inputType,
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "```text\n" +
      "{\n" +
      '  "foo": string\n' +
      "}\n" +
      "```\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an input type example", () => {
    const inputTypeExample = "{\n" + '  "foo": "bar"\n' + "}\n";

    const documentation = new DocGenerator({
      title: "My awesome doc",
      inputTypeExample,
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "```json\n" +
      "{\n" +
      '  "foo": "bar"\n' +
      "}\n" +
      "```\n" +
      "## Output\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an output description", () => {
    const documentation = new DocGenerator({
      title: "My awesome doc",
      outputDescription: "My Output description",
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n" +
      "My Output description\n" +
      "\n";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an output type", () => {
    const outputType = "{\n" + '  "foo": string\n' + "}\n";

    const documentation = new DocGenerator({
      title: "My awesome doc",
      outputType,
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n" +
      "```text\n" +
      "{\n" +
      '  "foo": string\n' +
      "}\n" +
      "```\n" +
      "";

    expect(documentation).toEqual(expectedDocumentation);
  });

  it("generates a documentation for a provided name and an output type example", () => {
    const outputTypeExample = "{\n" + '  "foo": "bar"\n' + "}\n";

    const documentation = new DocGenerator({
      title: "My awesome doc",
      outputTypeExample,
    }).generate();

    const expectedDocumentation =
      "# My awesome doc\n" +
      "\n" +
      "## Description\n" +
      "\n" +
      "## Input\n" +
      "\n" +
      "## Output\n" +
      "\n" +
      "```json\n" +
      "{\n" +
      '  "foo": "bar"\n' +
      "}\n" +
      "```\n" +
      "";

    expect(documentation).toEqual(expectedDocumentation);
  });
});
