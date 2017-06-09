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
      { route: "", redirect: "welcome" },
      { route: "welcome", name: "welcome", moduleId: PLATFORM.moduleName("pages/welcome/layout"), nav: true, title: "Welcome" },
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
