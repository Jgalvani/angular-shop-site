import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, SubscriptionLike } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartProduct, CartService } from 'src/app/services/cart/cart.service';

import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnDestroy {
  @ViewChild('background') background: ElementRef | undefined;
  @ViewChild('modal') modal: ElementRef | undefined;

  public cartProduct: CartProduct | undefined;
  public cartProducts: CartProduct[] = [];

  public productsPrice: number = 0;
  public shippingPrice: number = 0;
  public totalPrice: number = 0;
  public totalQuantity: number = 0;

  private modalSubscription: SubscriptionLike | undefined;
  private productSubscription: SubscriptionLike | undefined;

  private canBeClosed: boolean = false;


  constructor(
    private modalService: ModalService,
    private cartService: CartService,
    private router: Router,
  ) {

    this.modalSubscription = this.modalService.cartModalObs
    .subscribe(
      (product: Product | undefined) => {
        if (!product) return;

        this.openModal()
        this.initView(product);
      }
    );

    this.productSubscription = this.cartService.productObs
    .subscribe(
      () => this.initView(this.cartProduct)
    );
  }

  ngOnDestroy() {
    if (this.modalSubscription) this.modalSubscription.unsubscribe();
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  private initView(product: Product | CartProduct | undefined) {
    if (!product) return;

    this.cartProducts = this.cartService.products;

    const index = this.cartProducts.findIndex(p => p.id === product.id);
    this.cartProduct = this.cartProducts[index];

    this.productsPrice = this.cartService.productsPrice;
    this.shippingPrice = this.cartService.shippingPrice;
    this.totalPrice = this.cartService.totalPrice;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  //Modal
  private openModal() {
    if (!this.background) return;

    this.background.nativeElement.classList.remove('hidden');
    this.background.nativeElement.classList.add('display');

    this.canBeClosed = false;
  }

  public closeModal() {
    if (!this.background) return;

    this.background.nativeElement.classList.remove('display');
    this.background.nativeElement.classList.add('hidden');

    this.canBeClosed = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: ElementRef) {
    if (!this.modal) return;

    const clickedInside: boolean = this.modal.nativeElement.contains(targetElement);
    if (!clickedInside && this.canBeClosed) {
      this.closeModal();
      return;
    }

    this.canBeClosed = true;
  }
}
