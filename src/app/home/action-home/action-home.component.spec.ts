import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionHomeComponent } from './action-home.component';

describe('ActionHomeComponent', () => {
  let component: ActionHomeComponent;
  let fixture: ComponentFixture<ActionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
