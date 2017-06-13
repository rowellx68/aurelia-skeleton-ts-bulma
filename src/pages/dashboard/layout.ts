import { inject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

import { DashboardRouter } from "./routers/dashboard-router";

@inject(DashboardRouter)
export class DashboardLayout {
  constructor(public dashboardRouter: DashboardRouter) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.dashboardRouter.configure(config, router);
  }
}
