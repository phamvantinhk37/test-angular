import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedProfileComponent } from './unified-profile.component';

describe('UnifiedProfileComponent', () => {
  let component: UnifiedProfileComponent;
  let fixture: ComponentFixture<UnifiedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnifiedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifiedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
