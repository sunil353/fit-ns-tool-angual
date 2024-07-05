import { Component, OnInit } from '@angular/core';
import { FitNSToolService } from '../fit-ns-tool.service';
import { Product } from '../Product';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product',
  standalone : true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports : [CommonModule],
  providers: [FitNSToolService]
})
export class ProductComponent implements OnInit{

  
  products: Product[] = [];
  constructor(private toolService: FitNSToolService) { }

  ngOnInit() {
    this.toolService.getProducts().subscribe(
      (data: Product[]) => this.products = data,
      error => console.error('Error fetching products', error)
    );
  }  
  
  // ngOnInit() {
  //   let res = this.toolService.getProducts().subscribe(data => this.products = data);
  //   return res;
  // }
}
