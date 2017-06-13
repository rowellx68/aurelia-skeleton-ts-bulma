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

    element.classList.add("is-danger");
  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    element.classList.remove("is-danger");
  }
}
