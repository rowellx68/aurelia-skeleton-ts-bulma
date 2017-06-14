import { RenderInstruction, ValidateResult, ValidationRenderer } from "aurelia-validation";

export class ValidationBulmaFormRenderer {
  render(instruction: RenderInstruction) {
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    if (element.childElementCount) {
      this.addClassToElement(element, ".input");
      this.addClassToElement(element, ".button");
    }
    else {
      element.classList.add("is-danger");
    }
  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    if (element.childElementCount) {
      this.removeClassToElement(element, ".input");
      this.removeClassToElement(element, ".button");
    }
    else {
      element.classList.remove("is-danger");
    }
  }

  private addClassToElement(element: Element, selector: string) {
    const input = element.querySelector(selector);
    input.classList.add("is-danger");
  }

  private removeClassToElement(element: Element, selector: string) {
    const input = element.querySelector(selector);
    input.classList.remove("is-danger");
  }
}
