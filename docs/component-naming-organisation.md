# Component Naming and Organisation

Aurelia uses convention when it loads custom `element`, `attribute`, `valueConverter` classes. Classes must be named a certain way or using a [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) on the class will be required.

### Custom Element
Create your own custom elements with Aurelia. Idealy, you would name the files as how you would use the element in your html; e.g. `main-nav.html` and `main-nav.ts`.

Basic:
```typescript
export class MainNavCustomElement {

}
```

Decorator:
```typescript
import { customElement } from "aurelia-framework";

@customElement("main-nav")
export class ThisCouldBeAnything {

}
```

Usage:
```html
<template>
  <main-nav router.bind="router"></main-nav>
</template>
```

### Custom Attribute

Basic:
```typescript
export class TooltipCustomAttribute {

}
```

Decorator:
```typescript
import { customAttribute } from "aurelia-framework";

@customAttribute("tooltip")
export class CouldBeAnything {
  
}
```

Usage:
```html
<button class="btn btn-danger" tooltip title="Do not press!">DANGER</button>
```
