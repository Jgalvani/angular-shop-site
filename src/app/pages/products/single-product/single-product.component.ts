import { Component, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnDestroy {

  subscription: SubscriptionLike | undefined;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {
    this.subscription = this.productsService.productObs
    .subscribe(
      (products: Product[]) => {

        this.product = products.find((product: Product) => {
          return product.id === +this.route.snapshot.params['id']
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription)  this.subscription.unsubscribe();
  }

}
