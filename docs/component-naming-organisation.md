# Component Naming and Organisation

>In Aurelia, user interface components are composed of *view* and *view-model* pairs.


Aurelia uses convention when it loads custom `element`, `attribute`, `valueConverter` classes. Classes must be named a certain way or using a [decorator](https://www.typescriptlang.org/docs/handbook/decorators.html) on the class will be required.

### Custom Element

[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-custom-elements)

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

[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-custom-attributes)

Typically, custom attributes are code only and would not have a template.

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

### Value Converter
[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/binding/latest/binding-value-converters/1)

Value converters are code only. As the name implies, they convert value from your models to the view and vice versa.

Basic:
```typescript
export class DateFormatValueConverter {
  toView(value) {

  }

  fromView(value) {

  }
}
```

Decorator:
```typescript
import { customValidator } from "aurelia-framework";

@customValidator("dateFormat")
export class AnythingYouWant {
  toView(value) {

  }

  fromView(value) {

  }
}
```

Usage:
```html
<input type="text" value.two-way="model.date | dateFormat" class="form-control">
```
