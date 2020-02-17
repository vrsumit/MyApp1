import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TTCRegistrationComponent } from './ttc-registration.component';

describe('TTCRegistrationComponent', () => {
  let component: TTCRegistrationComponent;
  let fixture: ComponentFixture<TTCRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TTCRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TTCRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
