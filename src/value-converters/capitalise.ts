export class CapitaliseValueConverter {
  toView(value: string) {
    if (value === null || value === undefined || value.length === 0) {
      return value;
    }

    return value.toString()
      .replace(/(?:^|\s|-)\S/g, (char) => char.toUpperCase());
  }

  fromView(value: string) {
    if (value === null || value === undefined || value.length === 0) {
      return value;
    }

    return value.toString()
      .replace(/(?:^|\s|-)\S/g, (char) => char.toUpperCase());
  }
}
