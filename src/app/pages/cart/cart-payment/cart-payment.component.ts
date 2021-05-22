import { Component, OnInit } from '@angular/core';

import { OrderService } from 'src/app/services/order/order.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Order } from 'src/app/models/order';
import { CartService, CartProduct } from 'src/app/services/cart/cart.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.scss']
})
export class CartPaymentComponent implements OnInit {

  order: Order | undefined;
  public cartProductObs: Observable<CartProduct[]>;
  public totalPrice: number;
  public totalQuantity: number;

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    private cartService: CartService,
  ) {
    this.order = this.orderService.order;
    this.cartProductObs = this.cartService.productObs;
    this.totalPrice = this.cartService.totalPrice;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  ngOnInit(): void {
  }

  /*
    this.orderService.addOrder(order)
    .subscribe(
      () => console.log('Add order:', order),
      error => console.log('error:', error),
      () => console.log('complete')
    );
    */
}
