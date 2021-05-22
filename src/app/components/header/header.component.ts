import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  categoryObs: Observable<Category[]>;

  constructor(
    private categoryService: CategoriesService,
    private productsService: ProductsService,
  ) {
    this.categoryObs = this.categoryService.getCategories();
  }

  public filterProducts(category: Category | null) {
    this.productsService.filterProductsByCategory(category);
  }

}
