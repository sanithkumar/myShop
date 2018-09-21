import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from "../core/core.service";
import { DataService } from "../data.service";
import { Product } from "../core/model"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product;
  filters: any[];

/*  filterProduct(filters: any[]): void { // filter products based on filter selection
    console.log(filters);
  }*/

  applyFilter(id:number):boolean {
    if(this.filters.indexOf(id) == -1){
      return false
    } 
    return true;
  }

  constructor(private http: CoreService, private sharedData: DataService) { }
  ngOnInit() {
    this.http.getProducts()
      .subscribe(
      res => {
        this.products = res;
      }
      )
    this.sharedData.currentFilter
      .subscribe(data => {
        this.filters = data;

      });

  }





}
