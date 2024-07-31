import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);
  private baseUrl = '';

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}findAll`);
  }

  getAllDesiredProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}findAllDesired`);
  }

  getProductById(id:number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.baseUrl}findById/${id}`);
  }

  deleteProduct(id:number, product:ProductModel): Observable<object> {
    return this.http.put(`${this.baseUrl}activeProduct/${id}`, product);
  }

  changeDesiredProduct(id:number, product:ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.baseUrl}desiredProduct/${id}`, product);
  }

  averangePrice(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}getAverangePrice`);
  }

}
