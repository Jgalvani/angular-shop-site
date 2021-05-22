import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl: string = environment.API_URL + 'products/categories';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token ' + environment.TOKEN,
    })
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl, this.httpOptions);
  }

  getCategoryFromId(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + '/' + id, this.httpOptions);
  }
}

