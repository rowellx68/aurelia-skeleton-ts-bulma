import { bootstrap } from "aurelia-bootstrapper";
import { PLATFORM } from "aurelia-pal";
import { ComponentTester, StageComponent } from "aurelia-testing";

describe("TooltipCustomAttribute", () => {
  let component: ComponentTester;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName("attributes/tooltip"))
      .inView("<button tooltip='options.bind: myOptions' title='My button'>Button</button>")
      .boundTo({ myOptions: { arrow: true, theme: "light" } });
  });

  it("should include tooltip", (done) => {
    component
      .create(bootstrap)
      .then(() => {
        const tooltip = component.element.attributes.getNamedItem("tooltip");
        expect(tooltip).toBeDefined();
        done();
      })
      .catch(e => console.log(e.toString()));
  });

  it("should retain title when options change", (done) => {
    component
      .create(bootstrap)
      .then(() => {
        const oldTitle = component.element.getAttribute("data-original-title");
        component.boundTo({ myOptions: { arrow: true, theme: "dark" } });
        expect(component.element.getAttribute("data-original-title")).toEqual(oldTitle);
        done();
      })
      .catch(e => console.log(e.toString()));
  });

  afterEach(() => {
    component.dispose();
  });
});
