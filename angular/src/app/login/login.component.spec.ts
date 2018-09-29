import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { LoginComponent } from "./login.component";
import { LoginModule } from "./login.module";
import { PipesModule } from "../shared/pipes.module";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PipesModule, LoginModule ],
      providers: [
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy("navigate"); }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created - component", () => {
    expect(component).toBeTruthy();
  });
});
