import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { IProduct } from 'src/app/iproduct';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-fetchproducts',
  templateUrl: './fetchproducts.component.html',
  styleUrls: ['./fetchproducts.component.css']
})
export class FetchproductsComponent implements OnInit {

  // product_title: FormControl = new FormControl("");
  // product_price: FormControl = new FormControl("");
  // product_category: FormControl = new FormControl("");
  // product_description: FormControl = new FormControl("");
  // product_image: FormControl = new FormControl("");

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

  // save(){
  //   let product:IProduct = {
  //     productTitle: this.product_title.value,
  //     productPrice: this.product_price.value,
  //     productCategory: this.product_category.value,
  //     productDescription: this.product_description.value,
  //     productImage: this.product_image.value,
  //     forEach: undefined,
  //     filter: function (arg0: (a: any) => any): IProduct {
  //       throw new Error('Function not implemented.');
  //     },
  //     price: undefined,
  //     category: '',
  //     total: 0
  //   };
  //   this.productService.addProduct(product);
  //   alert("Data Saved");
  // }

  addtocart(item: IProduct){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}


