import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRoleProfileComponent } from './access-role-profile.component';

describe('AccessRoleProfileComponent', () => {
  let component: AccessRoleProfileComponent;
  let fixture: ComponentFixture<AccessRoleProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRoleProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRoleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
