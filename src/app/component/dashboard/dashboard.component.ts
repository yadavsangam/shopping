import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { IProduct } from 'src/app/iproduct';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public productList!: IProduct;
  public filterCategory: any;
  searchKey:string ="";
  productService: any;
  constructor(private api : ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:IProduct) => {
        if(a.category ==="fashion"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1, total:a.price});
      });
    });
    this.cartService.search.subscribe ((val:any) => {
      this.searchKey = val;
    })
  }

  // removeItem(item: any){
  //   this.cartService.removeCartItem(item);
  // }

  

  deleteProduct(item:IProduct){
    this.api.deleteProducts(<number>item.productId);
    this.loadData();
    console.log("item Deleted Successfully");
  }

  loadData() {
     this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:IProduct) => {
        if(a.category ==="fashion"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1, total:a.price});
      });
    });
    this.cartService.search.subscribe ((val:any) => {
      this.searchKey = val;
    })
  }

}
