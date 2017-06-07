# Component Naming and Organisation

Aurelia uses convention when it loads custom `element`, `attribute`, `valueConverter` classes. Classes must be named a certain way or an annotation on the class will be required.

### Custom Element
Create your own custom elements with Aurelia. Idealy, you would name the files as how you would use the element in your html; e.g. `main-nav.html` and `main-nav.ts`.

Class naming using convention:
```typescript
export class MainNavCustomElement {

}
```

Using annotation:
```typescript
import { customElement } from "aurelia-framework";

@customElement("main-nav")
export class ThisCouldBeAnything {

}
```

Both could then be used as follows:

```html
<template>
  <main-nav router.bind="router"></main-nav>
</template>
```

### Custom Attribute

Class naming using convention:
```typescript
export class TooltipCustomAttribute {

}
```

Using annotation:
```typescript
import { customAttribute } from "aurelia-framework";

@customAttribute("tool-tip")
export class CouldBeAnything {
  
}
```

Both could then be used as follows:

```html
<button class="btn btn-danger" tooltip title="Do not press!">DANGER</button>
```
