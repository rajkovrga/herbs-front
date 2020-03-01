import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbItemsComponent } from './herb-items.component';

describe('HerbItemsComponent', () => {
  let component: HerbItemsComponent;
  let fixture: ComponentFixture<HerbItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
