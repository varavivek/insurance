import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolicyComponent } from './show-policy.component';

describe('ShowPolicyComponent', () => {
  let component: ShowPolicyComponent;
  let fixture: ComponentFixture<ShowPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
