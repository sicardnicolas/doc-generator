interface DocGeneratorParameters {
  title?: string;
  description?: string;
  gherkin?: string;
  inputDescription?: string;
  inputType?: string;
  inputTypeExample?: string;
  outputDescription?: string;
  outputType?: string;
  outputTypeExample?: string;
}

export class DocGenerator {
  private readonly title?: string;
  private readonly description?: string;
  private readonly gherkin?: string;
  private readonly inputDescription?: string;
  private readonly inputType?: string;
  private readonly inputTypeExample?: string;
  private readonly outputDescription?: string;
  private readonly outputType?: string;
  private readonly outputTypeExample?: string;

  constructor({
    title,
    description,
    gherkin,
    inputDescription,
    inputType,
    inputTypeExample,
    outputDescription,
    outputType,
    outputTypeExample,
  }: DocGeneratorParameters) {
    this.title = title;
    this.description = description;
    this.gherkin = gherkin;
    this.inputDescription = inputDescription;
    this.inputType = inputType;
    this.inputTypeExample = inputTypeExample;
    this.outputDescription = outputDescription;
    this.outputType = outputType;
    this.outputTypeExample = outputTypeExample;
  }

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
