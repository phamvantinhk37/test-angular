import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDomainActionComponent } from './customer-domain-action.component';

describe('CustomerDomainActionComponent', () => {
  let component: CustomerDomainActionComponent;
  let fixture: ComponentFixture<CustomerDomainActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDomainActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDomainActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
