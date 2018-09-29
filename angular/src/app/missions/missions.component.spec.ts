import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MissionsComponent } from "./missions.component";
import { MissionsModule } from "./missions.module";

describe("MissionsComponent", () => {
  let component: MissionsComponent;
  let fixture: ComponentFixture<MissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MissionsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
