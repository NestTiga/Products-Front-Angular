import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  public product?:ProductModel;
  private routeParams= inject(ActivatedRoute);
  private productService= inject(ProductsService);
  private router= inject(Router);
  constructor() { }

  ngOnInit(): void {
    this.obtenerId();
  }

  obtenerId(){
    this.routeParams.params.subscribe((params) => {
      this.productById(params['idProduct']);
    });
  }

  productById(id:number) {
    this.productService.getProductById(id).subscribe({
      next: (product:ProductModel) => {
        this.product = product;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  backToProducts() {
    this.router.navigate(['/products']);
  }

}
