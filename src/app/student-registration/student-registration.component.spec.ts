import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistration } from './student-registration.component';

describe('StudentRegistration', () => {
  let component: StudentRegistration;
  let fixture: ComponentFixture<StudentRegistration>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistration ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
