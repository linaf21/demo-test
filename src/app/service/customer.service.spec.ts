import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Customer } from '../domain/customer';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  //Simular las peticiones http
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    //Sirve para veridicar que no existen solicitudes pendientes
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<Customer[]>', () => {
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

    service.findAll().subscribe(customers =>{
      expect(customers.length).toBe(2);
      expect(customers).toEqual(mockCustomer);
    });

    //Validar que la petición que se haga debe ser por método GET
    const req = httpMock.expectOne(service.API);
    expect(req.request.method).toBe('GET');
    //Lo que va a devolver serán las listas de mock-customers
    req.flush(mockCustomer);
  });
});
