import { updateOutput } from "ts-jest/dist/legacy/compiler/compiler-utils";

export class DocGenerator {
  static generate(
    title?: string,
    description?: string,
    gherkin?: string,
    inputDescription?: string,
    inputType?: string,
    inputTypeExample?: string,
    outputDescription?: string,
    outputType?: string,
    outputTypeExample?: string
  ): string {
    return (
      this.getTitle(title) +
      "## Description\n" +
      this.ifDefined(description) +
      this.formatCodeIfDefined("gherkin", gherkin) +
      "## Input\n" +
      this.ifDefined(inputDescription) +
      this.formatCodeIfDefined("text", inputType) +
      this.formatCodeIfDefined("json", inputTypeExample) +
      "## Output\n" +
      this.ifDefined(outputDescription) +
      this.formatCodeIfDefined("text", outputType) +
      this.formatCodeIfDefined("json", outputTypeExample)
    );
  }

  private static getTitle(input?: string): string {
    return input === undefined
      ? "# Default documentation\n\n"
      : `# ${input}\n\n`;
  }

  private static ifDefined(input?: string): string {
    return input === undefined ? "\n" : `\n${input}\n\n`;
  }

  private static formatCodeIfDefined(type: string, input?: string): string {
    return input === undefined
      ? ""
      : "```" + `${type}\n` + `${input}` + "```\n";
  }
}
