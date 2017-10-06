import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedToppingBoxComponent } from './selected-topping-box.component';

describe('SelectedToppingBoxComponent', () => {
  let component: SelectedToppingBoxComponent;
  let fixture: ComponentFixture<SelectedToppingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedToppingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedToppingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
