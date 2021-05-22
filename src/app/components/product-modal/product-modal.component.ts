import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @ViewChild('background') background: ElementRef | undefined;
  @ViewChild('modal') modal: ElementRef | undefined;

  private subscription: SubscriptionLike | undefined;

  private canBeClosed: boolean = false;

  public product: Product | undefined;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.subscription = this.modalService.productModalObs
    .subscribe(
      (product: Product | undefined) => {
        if (!product) return;

        this.product = product;
        this.openModal();
      }
    );
  }


  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }


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
