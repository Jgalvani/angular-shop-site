import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order: Order | undefined;

  private baseUrl: string = environment.API_URL + 'products/orders';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl, this.httpOptions);
  }

  getOrderFromId(id: number): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + '/' + id, this.httpOptions);
  }
}
