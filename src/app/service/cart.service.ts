import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : IProduct[] =[]
  public productList = new BehaviorSubject<IProduct[]>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: IProduct[] ){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : IProduct){
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList);
    const itemIndex = this.cartItemList.findIndex(item => item.productId === product.productId);
    if (itemIndex === -1) {
    this.cartItemList.push(product);
    // this.toastr.success( `${product.title} Successfully added to cart` , `Awesome!`);
    }
    else {
      // this.toastr.warning( 'Check your cart' , `${product.title} already added!`,{

        // timeOut:2500

      // });
      // this.cartItemList[itemIndex].quantity = this.cartItemList[itemIndex].quantity + product.quantity;
    }
    this.productList.next(this.cartItemList.slice(0));
    this.getTotalPrice();
  }


  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:IProduct)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  
  removeCartItem(product: IProduct){
    this.cartItemList.map((a:IProduct, index:any)=>{
      if(product.productId=== a.productId){
        this.cartItemList.splice(index,1);
      }
    })
     this.productList.next(this.cartItemList);

  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
