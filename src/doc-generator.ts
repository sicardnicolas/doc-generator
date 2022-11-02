export class DocGenerator {
  constructor(
    private readonly title?: string,
    private readonly description?: string,
    private readonly gherkin?: string,
    private readonly inputDescription?: string,
    private readonly inputType?: string,
    private readonly inputTypeExample?: string,
    private readonly outputDescription?: string,
    private readonly outputType?: string,
    private readonly outputTypeExample?: string
  ) {}

  generate(): string {
    return (
      this.getTitle(this.title) +
      "## Description\n" +
      this.ifDefined(this.description) +
      this.formatCodeIfDefined("gherkin", this.gherkin) +
      "## Input\n" +
      this.ifDefined(this.inputDescription) +
      this.formatCodeIfDefined("text", this.inputType) +
      this.formatCodeIfDefined("json", this.inputTypeExample) +
      "## Output\n" +
      this.ifDefined(this.outputDescription) +
      this.formatCodeIfDefined("text", this.outputType) +
      this.formatCodeIfDefined("json", this.outputTypeExample)
    );
  }

  private getTitle(input?: string): string {
    return input === undefined
      ? "# Default documentation\n\n"
      : `# ${input}\n\n`;
  }

  private ifDefined(input?: string): string {
    return input === undefined ? "\n" : `\n${input}\n\n`;
  }

  private formatCodeIfDefined(type: string, input?: string): string {
    return input === undefined
      ? ""
      : "```" + `${type}\n` + `${input}` + "```\n";
  }
}
