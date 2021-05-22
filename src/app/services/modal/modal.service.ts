import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public cartModalObs: BehaviorSubject<Product | undefined> = new BehaviorSubject<Product | undefined>(undefined);
  public productModalObs: BehaviorSubject<Product | undefined> = new BehaviorSubject<Product | undefined >(undefined);


  constructor() { }

  public openCartModal(product: Product) {
    this.cartModalObs.next(product);
  }

  public openProductModal(product: Product) {
    this.productModalObs.next(product);
  }
}
