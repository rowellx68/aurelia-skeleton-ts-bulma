import { Container } from "aurelia-dependency-injection";
import { PLATFORM } from "aurelia-pal";
import { Router } from "aurelia-router";

import { AppRouter } from "routers/app-router";

class RouterStub {
  routes: any[];
  currentInstruction;

  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }

  navigateToRoute(route: string) {
    this.currentInstruction = {
      config: this.routes.find(i => i.route === route)
    };
  }
}

describe("AppRouter", () => {
  let sut: AppRouter;
  let container: Container;
  let mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    container = new Container();
    sut = container.get(AppRouter);
    sut.configure(mockedRouter, mockedRouter);
  });

  it("contains a router property", () => {
    expect(sut.router).toBeDefined();
  });

  it("should have redirect to dashboard route", () => {
    expect(sut.router.routes).toContainEqual({ route: "", redirect: "welcome" });
  });

  it("should have a welcome route", () => {
    expect(sut.router.routes).toContainEqual({ route: "welcome", name: "welcome", moduleId: "pages/welcome/layout", nav: true, title: "Welcome" });
  });

  it("should have a dashboard route", () => {
    expect(sut.router.routes).toContainEqual({ route: "dashboard", name: "dashboard", moduleId: "pages/dashboard/layout", nav: true, title: "Dashboard" });
  });

  it("should have a login route", () => {
    expect(sut.router.routes).toContainEqual({ route: "login", name: "login", moduleId: "pages/login/layout", title: "Login" });
  });

  it("should navigate using navigateToWelcome method", () => {
    sut.navigateToWelcome();
    expect(sut.router.currentInstruction.config.route).toEqual("welcome");
  });

  it("should navigate using navigateToDashboard method", () => {
    sut.navigateToDashboard();
    expect(sut.router.currentInstruction.config.route).toEqual("dashboard");
  });

  it("should navigate using navigateToLogin method", () => {
    sut.navigateToLogin();
    expect(sut.router.currentInstruction.config.route).toEqual("login");
  });
});
