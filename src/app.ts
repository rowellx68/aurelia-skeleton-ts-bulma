import { inject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

import { AppRouter } from "./routers/app-router";

@inject(AppRouter)
export class App {
  constructor(public appRouter: AppRouter) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.appRouter.configure(config, router);
  }
}
