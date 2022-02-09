import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {

  public customer!: Customer;

  public showMsg: boolean = false;
  public messages: string[] = [];

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = {
      address: "",
      custId: 0,
      dotyId_DocumentType: 1,
      email: "",
      enable: "Y",
      name: "",
      phone: "",
      token: ""
    };
  }

  save(): void {
    console.log(this.customer);
  }

}
