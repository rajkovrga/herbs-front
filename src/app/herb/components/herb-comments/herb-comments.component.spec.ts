import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbCommentsComponent } from './herb-comments.component';

describe('HerbCommentsComponent', () => {
  let component: HerbCommentsComponent;
  let fixture: ComponentFixture<HerbCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
