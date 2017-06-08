import { inject } from "aurelia-framework";
import Tippy from "tippy.js";

@inject(Element)
export class TooltipCustomAttribute {
  constructor(private element: Element) {
  }
  
  private tip: tippy.TippyInstance;

  attached() {
    this.tip = Tippy(this.element, {
      arrow: true,
      size: "big"
    });
  }

  detatched() {
    this.tip.destroy(this.tip);
  }
}
