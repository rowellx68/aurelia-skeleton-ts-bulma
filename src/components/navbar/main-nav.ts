import { DialogOpenResult, DialogService } from "aurelia-dialog";
import { bindable, computedFrom, inject } from "aurelia-framework";
import { Router } from "aurelia-router";

import { ConfirmationModal } from "../../modals/confirmation/confirmation";
import { AppRouter } from "../../routers/app-router";

@inject(AppRouter, DialogService)
export class MainNavCustomElement {
  constructor(private appRouter: AppRouter, private dialogService: DialogService) {
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
}
