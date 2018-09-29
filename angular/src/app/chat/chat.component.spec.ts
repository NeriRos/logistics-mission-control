import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatComponent } from "./chat.component";
import { ChatModule } from "./chat.module";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

describe("ChatComponent", () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async(() => {
    const fakeActivatedRoute = {
      snapshot: { data: { } },
      params: new Observable()
    } as ActivatedRoute;

    TestBed.configureTestingModule({
      imports: [ ChatModule ],
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
