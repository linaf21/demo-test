import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerService: CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      providers: [CustomerService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
    customerService = TestBed.inject(CustomerService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar el service CustomerService', () => {
    let mockCustomer: Customer[] = [
      {
        "address": "94 Hintze Drive",
        "custId": 1,
        "email": "hdownes0@bloomberg.com",
        "enable": "Y",
        "name": "Humfried Downes",
        "phone": "62-(594)716-0300",
        "token": '',
        "dotyId_DocumentType": 3
      },
      {
        "address": "5 Ridgeview Junction",
        "custId": 2,
        "email": "jcannell1@stanford.edu",
        "enable": "Y",
        "name": "Jerrie Cannell",
        "phone": "46-(124)837-1565",
        "token": '',
        "dotyId_DocumentType": 3
      }
    ];

    const customerFake = spyOn(customerService, 'findAll').and.callFake(function(){
      return of<Customer[]>(mockCustomer);
    });

    component.ngOnInit();

    //Verifica que se haga el llamado
    expect(customerFake).toHaveBeenCalled();

  });
});
