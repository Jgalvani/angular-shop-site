import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public customer: Customer | undefined;

  public form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) {
    this.form = this.createForm();
    //this.customer = this.userService...;
  }

  private createForm(): FormGroup {

    return this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthDate: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      validatePassword: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      zipcode: new FormControl('', [Validators.required, Validators.min(4), Validators.max(10)]),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      other: new FormControl('', Validators.required),
    });
  }

  private customerSerializer(): any {
    return { ...this.form.value };
  }

  public onSubmit() {
    //this.customerService.order = this.customerSerializer();
  }

  public onCancel() {

  }

}
