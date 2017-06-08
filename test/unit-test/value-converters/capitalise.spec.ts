import { CapitaliseValueConverter } from "value-converters/capitalise";

describe("CapitaliseValueConverter", () => {
  let sut: CapitaliseValueConverter;

  beforeAll(() => {
    sut = new CapitaliseValueConverter();
  });

  it("retuens the same value", () => {
    expect(sut.toView("test")).toEqual("test");
  });
});
