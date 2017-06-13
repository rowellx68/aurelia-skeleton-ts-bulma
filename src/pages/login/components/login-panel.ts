import { inject } from "aurelia-framework";
import { validateTrigger, ValidationController, ValidationControllerFactory, ValidationRules } from "aurelia-validation";

import { AppRouter } from "../../../routers/app-router";
import { appEvents, EventManager } from "../../../utilities/event-manager";
import { ValidationBootstrapFormRenderer } from "../../../utilities/validation-bootstrap-renderer";

@inject(AppRouter, EventManager, ValidationControllerFactory)
export class LoginPanelCustomElement {
  constructor(private appRouter: AppRouter, private events: EventManager, private validationFactory: ValidationControllerFactory) {
    ValidationRules
      .ensure((l: LoginPanelCustomElement) => l.username).required()
      .ensure((l: LoginPanelCustomElement) => l.password).required()
      .on(this);
    
    this.validationController = this.validationFactory.createForCurrentScope();
    this.validationController.addRenderer(new ValidationBootstrapFormRenderer());
    this.validationController.validateTrigger = validateTrigger.change;
  }

  public username: string;

  public password: string;

  private validationController: ValidationController;

  login() {
    this.validationController.validate()
      .then((result) => {
        if (result.valid) {
          this.appRouter.navigateToWelcome();

          this.events.publish(appEvents.app.login);
        }
      });
  }
}
