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
}
