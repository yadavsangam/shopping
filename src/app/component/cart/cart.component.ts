import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService) { }

 // it runs when the component is called
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product = res;
      this.product.forEach((a: {
        quantity: any;productPrice: any 
}) => {
        Object.assign(a,{quantity: 1, total: a.productPrice})
    });
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  // call services to remove individual product from cart component
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  // call services to remove all product from cart component
  emptycart(){
    this.cartService.removeAllCart();
  }

  // Create a function for Increase the Quantity of product
  increaseQuantity(item:any,quantity:number){
    for(let i=0;i<this.product.length;i++)
    {
      if(this.product[i].productId === item.productId){
      this.product[i].quantity =quantity+1 ;
      this.product[i].total = item.total + item.productPrice;
    }
     }  
     this.grandTotal=this.cartService.getTotalPrice();    
    }

    // Create a function for Decrease the Quantity of product
    decreaseQuantity(item:any,quantity:number){
      for(let i=0;i<this.product.length;i++)
      {
        if(this.product[i].productId === item.productId ){
          console.log(this.product)
          if(quantity>1){
            this.product[i].total = item.total - item.productPrice;
          }
          if(quantity !=1)
          this.product[i].quantity = quantity-1;
            }    
      }  
      this.grandTotal=this.cartService.getTotalPrice();  
    }
  
}


