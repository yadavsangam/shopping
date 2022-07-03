import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { IProduct } from 'src/app/iproduct';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-fetchproducts',
  templateUrl: './fetchproducts.component.html',
  styleUrls: ['./fetchproducts.component.css']
})
export class FetchproductsComponent implements OnInit {

  

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

 
  addtocart(item: IProduct){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.productCategory == category || category==''){
        console.log(a)
        return a;
      }
    })
  }


}


