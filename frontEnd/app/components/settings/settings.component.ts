import { Component } from "@angular/core";
import { ISettings } from "~/models/settings.model";
import { Globals } from "~/shared/globals";

@Component({
  moduleId: module.id,
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent {
  private settings: ISettings = {};

  // tslint:disable-next-line:no-empty
  constructor(private globals: Globals) {
    this.settings.server = this.globals.ip;
  }

  saveSettings() {
    this.globals.ip = this.settings.server;
  }
}
