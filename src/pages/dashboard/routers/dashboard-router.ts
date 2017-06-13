import { inject } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class DashboardRouter {
  public router: Router;

  public configure(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ["", "/"], moduleId: PLATFORM.moduleName("pages/dashboard/pages/home/home"), nav: true, title: "Home", settings: { icon: "fa-home" } },
      { route: "requests", name: "requests", moduleId: PLATFORM.moduleName("pages/dashboard/pages/requests/requests"), nav: true, title: "Requests", settings: { icon: "fa-calendar" } },
      { route: "users", name: "users", moduleId: PLATFORM.moduleName("pages/dashboard/pages/users/users"), nav: true, title: "Users", settings: { icon: "fa-user" } }
    ]);

    config.mapUnknownRoutes({ route: "not-found", name: "not-found", moduleId: PLATFORM.moduleName("pages/not-found/layout"), title: "Not Found" });

    this.router = router;
  }
}
