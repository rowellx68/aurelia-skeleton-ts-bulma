import { bindable, inject } from "aurelia-framework";

@inject(Element)
export class TooltipCustomAttribute {
  constructor(private element: Element) {
  }

  @bindable options: tippy.TippyOptions;
  
  private tip: tippy.TippyInstance;

  bind() {
    let options: tippy.TippyOptions = { arrow: true, size: "big", theme: "success" };

    if (this.options) {
      options = this.options;
    }

    this.tip = Tippy(this.element, options);
  }

  unbind() {
    this.destroyTippyInstance();
  }

  /* istanbul ignore next */
  optionsChanged() {
    this.destroyTippyInstance();

    this.element.setAttribute("title", this.element.getAttribute("data-original-title"));
    this.tip = Tippy(this.element, this.options);
  }

  private destroyTippyInstance() {
    if (this.tip) {
      const popper = this.tip.getPopperElement(this.element);
      this.tip.destroy(popper);
    }
  }
}
