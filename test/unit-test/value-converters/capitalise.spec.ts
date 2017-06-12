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
    it("returns capitalised single word", () => {
      expect(sut.fromView("word")).toEqual("Word");
      expect(sut.fromView("wOrd")).toEqual("WOrd");
    });

    it("returns capitalised multiple words", () => {
      expect(sut.fromView("words words")).toEqual("Words Words");
    });

    it("returns null / undefined / empty string", () => {
      expect(sut.fromView(null)).toEqual(null);
      expect(sut.fromView(undefined)).toEqual(undefined);
      expect(sut.fromView("")).toEqual("");
    });
  });
});
