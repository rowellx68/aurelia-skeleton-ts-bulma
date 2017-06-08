import { CapitaliseValueConverter } from "value-converters/capitalise";

describe("CapitaliseValueConverter", () => {
  let sut: CapitaliseValueConverter;

  beforeAll(() => {
    sut = new CapitaliseValueConverter();
  });

  describe("toView", () => {
    it("returns capitalised single word", () => {
      expect(sut.toView("word")).toEqual("Word");
      expect(sut.toView("wOrd")).toEqual("WOrd");
    });

    it("returns capitalised multiple words", () => {
      expect(sut.toView("words words")).toEqual("Words Words");
    });

    it("returns null / undefined / empty string", () => {
      expect(sut.toView(null)).toEqual(null);
      expect(sut.toView(undefined)).toEqual(undefined);
      expect(sut.toView("")).toEqual("");
    });
  });

  describe("fromView", () => {
    
  });
});
