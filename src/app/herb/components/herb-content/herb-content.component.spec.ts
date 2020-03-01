import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbContentComponent } from './herb-content.component';

describe('HerbContentComponent', () => {
  let component: HerbContentComponent;
  let fixture: ComponentFixture<HerbContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
