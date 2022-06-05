export abstract class ArgumentType<parseType extends any> {
  abstract isValid(input: string): boolean;
  abstract parse(input: string): parseType;
}
