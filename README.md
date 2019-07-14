# Async Pipe

#### ProductService.ts
```
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
```

#### app.component.ts
```
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { of } from 'rxjs';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-async-demo';

  products$:Observable<any> ;

  selectedCategory: string;

  constructor(private productService:ProductService){

  }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.products$ = this.productService.list();
  }

}
```

#### app.component.html
```

<h3>Product List( Using Async Pipe)</h3>
<table border="1">
  <thead><tr><th>Sno</th><th>Product Name</th><th>Price</th><th>Category</th></tr></thead>
  <tbody *ngFor="let p of products$ | async">
      <tr><td>{{p.id}}</td><td>{{p.name}}</td><td>{{p.price}}</td>
        <td>{{p.category}}</td>
      </tr>
 </tbody>
</table>
```

