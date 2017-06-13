import { DialogController } from "aurelia-dialog";
import { inject } from "aurelia-framework";

@inject(DialogController, Element)
export class ConfirmationModal {
  constructor(public controller: DialogController, private element: Element) {
  }

  public title: string = "Confirmation";

  public message: string = "";

  public okText: string = "Yes";

  public cancelText: string = "No";

  public dialogClass: string = "ux-dialog-small";

  activate(model) {
    this.applyOptionalProperties(model);
  }

  private applyOptionalProperties(model) {
    if (model.title) {
      this.title = model.title;
    }

    if (model.message) {
      this.message = model.message;
    }

    if (model.okText) {
      this.okText = model.okText;
    }

    if (model.cancelText) {
      this.cancelText = model.cancelText;
    }

    if (model.dialogClass) {
      this.dialogClass = model.dialogClass;
    }
  }
}
