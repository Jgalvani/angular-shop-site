import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, SubscriptionLike } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnDestroy {

  private products: Product[] = [];
  public productObs: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private productSubscription: SubscriptionLike | undefined;

  private baseUrl: string = environment.API_URL + 'products/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };


  constructor(private http: HttpClient) {
    this.productSubscription = this.getProducts().subscribe(p => this.products = p);
  }

  ngOnDestroy() {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }

  filterProductsByCategory(category: Category | null) {
    if (category) {
      const products = this.products.filter(p => p.category_id === category.id);
      this.productObs.next(products);
    } else {
      this.productObs.next(this.products);
    }
  }

  // Get
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl, this.httpOptions)
    .pipe(
      tap((products: Product[]) => this.productObs.next(products))
    );
  }

  public getProductFromId(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id, this.httpOptions);
  }
}
