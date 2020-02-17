import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWCRegistrationComponent } from './cwc-registration.component';

describe('CWCRegistrationComponent', () => {
  let component: CWCRegistrationComponent;
  let fixture: ComponentFixture<CWCRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWCRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWCRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
