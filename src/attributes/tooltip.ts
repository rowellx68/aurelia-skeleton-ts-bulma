import { inject } from "aurelia-framework";
import Tippy from "tippy.js";

@inject(Element)
export class TooltipCustomAttribute {
  constructor(private element: Element) {
  }

  private options: tippy.TippyOptions = { arrow: true, size: "big" };
  
  private tip: tippy.TippyInstance;

  bind() {
    this.tip = Tippy(this.element, this.options);
  }

  unbind() {
    if (this.tip) {
      const popper = this.tip.getPopperElement(this.element);
      this.tip.destroy(popper);
    }
  }
}
