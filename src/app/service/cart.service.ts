import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../iproduct';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : IProduct[] =[]
  public productList = new BehaviorSubject<IProduct[]>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private toastr:ToastrService) { }

  getProducts(){
    return this.productList.asObservable();
    console.log(this.productList.asObservable())
  }


  // Here we implement Add to cart
  addtoCart(product : IProduct){
    const itemIndex = this.cartItemList.findIndex(item => item.productId === product.productId);
    if (itemIndex === -1) {
    this.cartItemList.push(product);
    this.toastr.success( `${product.productTitle} Successfully added to cart` , `Awesome!`); //Used for notification
    }
    else {
      this.toastr.warning( 'Check your cart' , `${product.productTitle} already added!`,{

        timeOut:2500

      });
    }
    this.productList.next(this.cartItemList.slice(0));
    this.getTotalPrice();
  }

  // this method get total price by adding all the products total from cart
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:IProduct)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // this method remove the cart item individually
  removeCartItem(product: IProduct){
    this.cartItemList.map((a:IProduct, index:any)=>{
      if(product.productId=== a.productId){
        this.cartItemList.splice(index,1);
      }
    })
     this.productList.next(this.cartItemList);

  }

  // // this method remove all the cart item 
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
