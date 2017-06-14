import { DialogController } from "aurelia-dialog";
import { inject } from "aurelia-framework";

@inject(DialogController, Element)
export class AlertModal {
  constructor(public controller: DialogController, private element: Element) {
  }

  public title: string = "Alert";

  public message: string = "";

  public okText: string = "OK";

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
  }
}
