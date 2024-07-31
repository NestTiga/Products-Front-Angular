import { Component, inject, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-desired-products',
  standalone: true,
  imports: [],
  templateUrl: './desired-products.component.html',
  styleUrl: './desired-products.component.css'
})
export class DesiredProductsComponent implements OnInit {

  public productList: ProductModel[] = [];
  private productService= inject(ProductsService);

  ngOnInit(): void {
    this.getAllDesiredProducts();
  }

  getAllDesiredProducts() {
    this.productService.getAllDesiredProducts().subscribe({
      next: (products:ProductModel[]) => {
        this.productList = products;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  changeDesiredProduct(id:number, product:ProductModel) {
    product.desired = false;
    this.productService.changeDesiredProduct(id, product).subscribe({
      next: (product:ProductModel) => {
        this.getAllDesiredProducts();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
