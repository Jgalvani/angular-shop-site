import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Slice } from 'src/app/components/pagination/pagination.component';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public length: number = 0;

  public sliceValues: Slice = { start: 0, end: 10 };

  public cartProductObs: Observable<CartProduct[]>;

  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef,
  ) {

    this.cartProductObs = this.cartService.productObs
    .pipe(
      tap((cartProducts: CartProduct[]) => this.length = cartProducts.length)
    );
  }

  getSlice(sliceValues: Slice) {
    this.sliceValues = sliceValues;
    this.cdRef.detectChanges();
  }

  public removeProduct(cartProduct: CartProduct) {
    this.cartService.removeProduct(cartProduct);
  }
}
