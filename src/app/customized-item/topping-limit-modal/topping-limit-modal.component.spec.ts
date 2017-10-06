import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingLimitModalComponent } from './topping-limit-modal.component';

describe('ToppingLimitModalComponent', () => {
  let component: ToppingLimitModalComponent;
  let fixture: ComponentFixture<ToppingLimitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingLimitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingLimitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
