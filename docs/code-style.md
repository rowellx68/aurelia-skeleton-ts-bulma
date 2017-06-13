# Code Style
Linting is imposed for all TypeScript files. We use `tslint` and a TSLint plugin for your IDE. The rules can be found inside `tslint.json`.

Some notable rules are as follows:

- [class-name](https://palantir.github.io/tslint/rules/class-name/)
- [member-ordering](https://palantir.github.io/tslint/rules/member-ordering/)
- [no-debugger](https://palantir.github.io/tslint/rules/no-debugger/)
- [no-var-keyword](https://palantir.github.io/tslint/rules/no-var-keyword/)
- [no-var-requires](https://palantir.github.io/tslint/rules/no-var-requires/)

## Member Ordering
The member orderring rule will force you to order the classes like below:

```typescript
export class Hello {
  constructor(private name: string) {
  }

  public introText: string = "Hello";

  private concatString: string = ", ";

  public speak(): void {
    console.log(this.concat());
  }

  private concat(): string {
    return `${this.introText}${this.concatString}${this.name}`;
  }
}
```
