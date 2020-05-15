import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDomainViewComponent } from './customer-domain-view.component';

describe('CustomerDomainViewComponent', () => {
  let component: CustomerDomainViewComponent;
  let fixture: ComponentFixture<CustomerDomainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDomainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDomainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
