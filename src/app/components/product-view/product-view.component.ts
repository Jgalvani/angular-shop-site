import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent{

  @Input() product: Product | undefined;

  @Input() isModal: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private cartService: CartService,
    private modalService: ModalService,
  ) { }

  public openCartModal() {
    if (!this.product) return;

    this.cartService.addProduct(this.product);
    this.modalService.openCartModal(this.product);
    if (this.isModal) this.closeModal();
  }

  public closeModal() {
    this.close.emit(true);
  }
}
