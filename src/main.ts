import { Aurelia } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";
import * as Bluebird from "bluebird";

import "font-awesome/css/font-awesome.css";
import "./sass/bootstrap-override.scss";
import "./sass/site.scss";

Bluebird.config({ warnings: { wForgottenReturn: false } });


declare let ENV: AppConfig;

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("components"));

  if (ENV.logging) {
    aurelia.use.developmentLogging();
  }

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName("app"));
}
