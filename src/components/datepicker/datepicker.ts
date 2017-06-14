import { bindable, inject } from "aurelia-framework";

import * as Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";


@inject(Element)
export class DatepickerCustomElement {
  constructor(private element: Element) {
  }

  @bindable value: Date | Date[];

  @bindable placeholder: string = "";

  @bindable hasIcon: boolean;

  private picker: Flatpickr;

  attached() {
    this.element.classList.add("field", "is-flex");
    const el = this.element.querySelector(".input");

    this.picker = new Flatpickr(el, {
      dateFormat: "d/m/Y",
      disableMobile: true,
      onChange: (dates) => {
        this.value = dates;
      }
    });
  }

  detached() {
    this.picker.destroy();
  }

  clear() {
    if (this.picker) {
      this.picker.clear();
      this.value = undefined;
    }
  }
}
