import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SupportComponent } from "./support.component";
import { SupportModule } from "./support.module";

describe("SupportComponent", () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SupportModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  // it("should delete support and remove from array", () => {
  //   expect(component).toBeTruthy();
  // });
});
