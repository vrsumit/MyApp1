import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookOrderComponent } from './textbook-order.component';

describe('TextbookOrderComponent', () => {
  let component: TextbookOrderComponent;
  let fixture: ComponentFixture<TextbookOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
