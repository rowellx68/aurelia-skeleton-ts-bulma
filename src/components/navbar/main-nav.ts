import { bindable, computedFrom } from "aurelia-framework";
import { Router } from "aurelia-router";

export class MainNavCustomElement {
  @bindable router: Router;

  @computedFrom("router.currentInstruction")
  public get authenticated() {
    if (!this.router || !this.router.currentInstruction) {
      return false;
    }

    const current = this.router.currentInstruction;
    return current.fragment !== "/login";
  }
}
