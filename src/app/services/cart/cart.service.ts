import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

export interface CartProduct extends Product {
  quantity: number,
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productObs: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
  private cartProducts: CartProduct[] = [];
  private cartProductsPrice: number = 0;
  private cartShippingPrice: number = 0;
  private cartTotalQuantity: number = 0;


  constructor() { }

  // Setters
  private setProductsPrice() {
    this.cartProductsPrice = this.cartProducts.length
    ? this.cartProducts
      .map(p => p.price * p.quantity)
      .reduce((a, b) => a + b)
    : 0;
  }

  private setTotalQuantity() {
    this.cartTotalQuantity = this.cartProducts.length
    ? this.cartProducts
      .map(p => p.quantity)
      .reduce((a, b) => a + b)
    : 0;
  }

  public computeShippingPrice(/* ??? */) {
    // ???
  }

  // Getters
  get products(): CartProduct[] {
    return [...this.cartProducts];
  }

  get shippingPrice(): number  {
    return this.cartShippingPrice;
  }

  get productsPrice(): number {
    return this.cartProductsPrice;
  }

  get totalPrice(): number {
    return this.cartProductsPrice + this.cartShippingPrice;
  }

  get totalQuantity(): number {
    return this.cartTotalQuantity;
  }

  // Cart management functions
  public addProduct(product: Product) {
    const index = this.cartProducts.findIndex(p => p.id === product.id);

    if (index !== -1) {
      const quantity = this.cartProducts[index].quantity + 1;
      this.cartProducts.splice(index, 1);
      this.cartProducts.push({ ...product, quantity });

    } else {

      this.cartProducts.push({ ...product, quantity: 1});
    }

    this.setProductsPrice();
    this.setTotalQuantity();

    this.productObs.next(this.cartProducts);
  }

  public removeProduct(product: CartProduct) {
    this.cartProducts = this.cartProducts.filter(p => p.id !== product.id);

    this.setProductsPrice();
    this.setTotalQuantity();

    this.productObs.next(this.cartProducts);
  }


}
