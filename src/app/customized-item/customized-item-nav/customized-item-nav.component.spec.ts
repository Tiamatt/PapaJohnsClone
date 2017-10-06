import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedItemNavComponent } from './customized-item-nav.component';

describe('CustomizedItemNavComponent', () => {
  let component: CustomizedItemNavComponent;
  let fixture: ComponentFixture<CustomizedItemNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedItemNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedItemNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
