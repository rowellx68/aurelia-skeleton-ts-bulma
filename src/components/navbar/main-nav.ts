import { DialogOpenResult, DialogService } from "aurelia-dialog";
import { bindable, computedFrom, inject } from "aurelia-framework";
import { Router } from "aurelia-router";

import { ConfirmationModal } from "../../modals/confirmation/confirmation";
import { AppRouter } from "../../routers/app-router";

@inject(Element, AppRouter, DialogService)
export class MainNavCustomElement {
  constructor(private el: Element, private appRouter: AppRouter, private dialogService: DialogService) {
  }

  @bindable router: Router;

  @computedFrom("router.currentInstruction")
  public get authenticated() {
    // ideally you could get this from your service
    if (!this.router || !this.router.currentInstruction) {
      return false;
    }

    const current = this.router.currentInstruction;
    return current.fragment !== "/login";
  }

  attached() {
    const toggle = this.el.querySelector(".nav-toggle");
    const navItems = Array.prototype.slice.call(this.el.querySelectorAll(".nav-item"));

    toggle.addEventListener("click", (ev: Event) => this.toggleClick(event));

    navItems.forEach(e => {
      e.addEventListener("click", () => this.navItemClick());
    });
  }

  detached() {
    const toggle = this.el.querySelector(".nav-toggle");
    const navItems = Array.prototype.slice.call(this.el.querySelectorAll(".nav-item"));

    toggle.removeEventListener("click", (ev: Event) => this.toggleClick(event));
    navItems.forEach(e => {
      e.removeEventListener("click", () => this.navItemClick());
    });
  }

  public async logout() {
    const result = await this.dialogService.open({
      viewModel: ConfirmationModal,
      model: {
        message: "Are you sure you would like to log out?",
        okText: "Yes, logout"
      }
    }).then((dialogResult: DialogOpenResult) => dialogResult.closeResult);

    if (!result.wasCancelled) {
      this.appRouter.navigateToLogin();
    }
  }

  private toggleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const menu = this.el.querySelector(".nav-menu");

    menu.classList.contains("is-active")
        ? menu.classList.remove("is-active")
        : menu.classList.add("is-active");
  }

  private navItemClick() {
    const menu = this.el.querySelector(".nav-menu");
    menu.classList.remove("is-active");
  }
}
