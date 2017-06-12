import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { inject } from "aurelia-framework";

@inject(EventAggregator)
export class EventManager {
  constructor(private aggregator: EventAggregator) {
  }

  public publish(event: string, data?: any) {
    this.aggregator.publish(event, data);
  }
}

export class AuSubscription implements ISubscription {
  constructor(private subscription: Subscription) {
  }

  public dispose() {
    this.subscription.dispose();
  }
}

export interface ISubscription {
  dispose(): void;
}

export const appEvents = {
  app: {
    login: "app:login"
  }
};
