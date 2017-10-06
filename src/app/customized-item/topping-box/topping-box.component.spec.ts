import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingBoxComponent } from './topping-box.component';

describe('ToppingBoxComponent', () => {
  let component: ToppingBoxComponent;
  let fixture: ComponentFixture<ToppingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
