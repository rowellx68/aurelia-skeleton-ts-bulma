import { inject } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

import { AppRouter } from "./routers/app-router";
import { appEvents, EventManager, ISubscription } from "./utilities/event-manager";

@inject(AppRouter, EventManager)
export class App {
  constructor(public appRouter: AppRouter, private events: EventManager) {
  }

  private subscriptions: ISubscription[] = [];
  
  attached() {
    this.subscriptions.push(
      this.events.subscribe(appEvents.app.login, () => {
        // do stuff here
        console.log("Event recieved: User logged in");
      })
    );
  }

  detached() {
    this.subscriptions.forEach(s => s.dispose());
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.appRouter.configure(config, router);
  }
}
