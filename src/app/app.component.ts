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
