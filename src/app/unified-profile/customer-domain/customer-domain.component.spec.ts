import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDomainComponent } from './customer-domain.component';

describe('CustomerDomainComponent', () => {
  let component: CustomerDomainComponent;
  let fixture: ComponentFixture<CustomerDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
