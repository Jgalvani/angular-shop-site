import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Slice } from 'src/app/components/pagination/pagination.component';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productObs: Observable<Product[]>;

  public sliceValues: Slice = { start: 0, end: 10 };

  public productsLength: number = 0;


  constructor(
    private cartService: CartService,
    private cdRef: ChangeDetectorRef,
    private productsService: ProductsService,
    private modalService: ModalService,
  ) {
    this.productObs = this.productsService.productObs.pipe(
      tap((products: Product[]) => this.productsLength = products.length )
    );
  }

  ngOnInit() {}

  public openProductModal(product: Product) {
    this.modalService.openProductModal(product);
  }

  public openCartModal(product: Product) {
    this.cartService.addProduct(product);
    this.modalService.openCartModal(product);
  }

  getSlice(sliceValues: Slice) {
    this.sliceValues = sliceValues;
    this.cdRef.detectChanges();
  }
}
