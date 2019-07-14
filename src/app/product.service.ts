import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  list():Observable<any> {
    var products = [{ "id": 1, "name": "MAC", "price": 1000, "category": "Laptop" },
    { "id": 2, "name": "Lenova", "price": 500, "category": "Laptop" },
    { "id": 3, "name": "iPhone", "price": 500, "category": "Mobile" }];
    return of(products);
  }
}
