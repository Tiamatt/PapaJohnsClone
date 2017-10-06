import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedItemFooterComponent } from './customized-item-footer.component';

describe('CustomizedItemFooterComponent', () => {
  let component: CustomizedItemFooterComponent;
  let fixture: ComponentFixture<CustomizedItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedItemFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
