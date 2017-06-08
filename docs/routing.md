# Routing

[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/router/latest/router-configuration/1)

>To use Aurelia's router, your component view must have a `<router-view></router-view>` element. In order to configure the router, the component's view-model requires a `configureRouter()` function.

The application's main router should be extracted into a different class so it could be easily accessed without having to import `App`.

As can be seen from the example below, you will be able to inject `AppRouter` anywhere and use utility methods for navigating throughout the app.

### Example
```html
<!--app.html-->
<template>
  <router-view></router-view>
</template>
```

```typescript
// app.ts
import { inject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { AppRouter } from "./routers/app-router";

@inject(AppRouter)
export class App {
  constructor(private appRouter: AppRouter) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.appRouter.configure(config, router);
  }
}
```

```typescript
// app-router.ts
import { inject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class AppRouter {
  constructor() {
  }

  public router: Router;

  public configure(config: RouterConfiguration, router: Router) {

    config.title = "Aurelia Webpack Starter";
    config.map([
      { route: "", redirect: "dashboard" },
      { route: "dashboard", name: "dashboard", moduleId: PLATFORM.moduleName("pages/dashboard/layout"), nav: true, title: "Dashboard" },
      { route: "login", name: "login", moduleId: PLATFORM.moduleName("pages/login/layout"), title: "Login" }
    ]);

    this.router = router;
  }

  public navigateToDashboard() {
    this.router.navigateToRoute("dashboard");
  }

  public navigateToLogin() {
    this.router.navigateToRoute("login");
  }
}
```

## Nested Routes

