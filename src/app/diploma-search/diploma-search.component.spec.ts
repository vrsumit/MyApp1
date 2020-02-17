import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaSearchComponent } from './diploma-search.component';

describe('DiplomaSearchComponent', () => {
  let component: DiplomaSearchComponent;
  let fixture: ComponentFixture<DiplomaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplomaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
