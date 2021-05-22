import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = environment.API_URL + 'products/customers';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };

  constructor(private http: HttpClient) { }

  // GET
  public getUsers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl, this.httpOptions);
  }

  public getProductFromId(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + id, this.httpOptions);
  }

  // POST
  public addProduct(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer, this.httpOptions);
  }

  // PUT
  public editProduct(customer: Customer): Observable<Customer> {
  return this.http.put<Customer>(this.baseUrl  + customer.id, customer, this.httpOptions);
  }

  // DELETE
  public deleteProduct(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl  + id, this.httpOptions);
  }
}
