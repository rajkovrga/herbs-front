import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbItemComponent } from './herb-item.component';

describe('HerbItemComponent', () => {
  let component: HerbItemComponent;
  let fixture: ComponentFixture<HerbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
