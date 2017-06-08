import { RenderInstruction, ValidateResult, ValidationRenderer } from "aurelia-validation";

export class ValidationBootstrapFormRenderer {
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

    const formGroup = element.closest(".form-group");
    if (!formGroup) {
      return;
    }

    formGroup.classList.add("has-error");
  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest(".form-group");
    if (!formGroup) {
      return;
    }

    formGroup.classList.remove("has-error");
  }
}
