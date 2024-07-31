import { Component, inject, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  
  public productList: ProductModel[] = [];
  private productService= inject(ProductsService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products:ProductModel[]) => {
        this.productList = products;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteProduct(id:number, product:ProductModel) {
    product.active = false;
    this.productService.deleteProduct(id, product).subscribe({
      next: (res) => {
        if (res){
          this.getAllProducts();
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  desiredProduct(id:number, product:ProductModel) {
    product.desired = true;
    this.productService.changeDesiredProduct(id, product).subscribe({
      next: (product:ProductModel) => {
        this.getAllProducts();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
