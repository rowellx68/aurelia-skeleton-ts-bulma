import { DialogController } from "aurelia-dialog";
import { inject } from "aurelia-framework";

@inject(DialogController)
export class ConfirmationModal {
  constructor(public controller: DialogController) {
  }

  public title: string = "Confirmation";
  public okText: string = "Yes";
  public dialogClass: string = "ux-dialog-small";
}
