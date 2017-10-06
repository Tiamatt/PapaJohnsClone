import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedItemComponent } from './customized-item.component';

describe('CustomizedItemComponent', () => {
  let component: CustomizedItemComponent;
  let fixture: ComponentFixture<CustomizedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
