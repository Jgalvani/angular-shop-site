import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { OrderService } from 'src/app/services/order/order.service';

import { CustomerService } from 'src/app/services/customer/customer.service';
import { Order } from 'src/app/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-validation',
  templateUrl: './cart-validation.component.html',
  styleUrls: ['./cart-validation.component.scss']
})
export class CartValidationComponent {

  public orderWithoutLogin: boolean = false;

  public customer: Customer | undefined;

  public form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private orderService: OrderService,
    private router: Router,
  ) {
    this.form = this.createForm();
    //this.customer = this.userService...;
  }

  private createForm(): FormGroup {

    const firstName = this.customer ? this.customer.firstName : '';
    const lastName = this.customer ? this.customer.lastName : '';
    const address = this.customer ? this.customer.address : '';
    const zipcode = this.customer ? this.customer.zipcode : '';
    const city = this.customer ? this.customer.city : '';
    const country = this.customer ? this.customer.country : '';
    const other = this.customer ? this.customer.other : '';

    return this.formBuilder.group({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      address: new FormControl(address, Validators.required),
      zipcode: new FormControl(zipcode, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      city: new FormControl(city, Validators.required),
      country: new FormControl(country, Validators.required),
      other: new FormControl(other),
    });
  }

  private orderSerializer(): Order {
    return { ...this.form.value };
  }

  public onSubmit() {
    this.orderService.order = this.orderSerializer();
    this.router.navigate(['cart/payment'])
  }

  public onCancel() {

  }

  onOrderWithoutLogin() {
    this.orderWithoutLogin = true;
  }
}
