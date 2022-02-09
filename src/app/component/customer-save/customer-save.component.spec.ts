import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';

import { CustomerSaveComponent } from './customer-save.component';

describe('CustomerSaveComponent', () => {
  let component: CustomerSaveComponent;
  let fixture: ComponentFixture<CustomerSaveComponent>;
  let customerService:CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSaveComponent ],
      providers:[CustomerService],
      imports:[HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    customerService=TestBed.inject(CustomerService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
