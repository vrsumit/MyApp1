import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OVBSRegistrationComponent } from './ovbs-registration.component';

describe('OVBSRegistrationComponent', () => {
  let component: OVBSRegistrationComponent;
  let fixture: ComponentFixture<OVBSRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OVBSRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OVBSRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
