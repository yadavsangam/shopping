import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { IProduct } from 'src/app/iproduct';
import {CartService} from '../../service/cart.service';

declare var Razorpay:any;


@Component({ 
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public productList : IProduct[] = [];
  public grandTotal ! : number ; 

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.productList = res;
      this.grandTotal=this.cartService.getTotalPrice();
     })
  }
  message:any="Not yet started";
  paymentId="";
  error="";
  title = 'pay';
  options = { 

    "key": "rzp_test_nsB9QKukBu9R7G",
    "amount": this.grandTotal ,
    "name": "shruti chavan",
    "description": "Web Development",
    "image": "https://www.bing.com/th?id=OIP.cnecnqWcPtjpK9zoiO42dwHaHa&w=96&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "order_id":"",
    "handler": function (response: any){
        var event = new CustomEvent("payment.success",
            {

                detail: response,
                bubbles: true,
                cancelable: true
            }
        );

        window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
 "notes": {
 "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }

    };
    paynow(){
      this.paymentId = '';
this.error = '';
   this.options.amount = this.grandTotal *100; //paise
  this.options.prefill.name = "shruti chavan";
 this.options.prefill.email = "chavanshruti208@gmail.com";

        this.options.prefill.contact = "9769979709";
        var rzp1 = new Razorpay(this.options);
        rzp1.open();
        rzp1.on('payment.failed', function (response: any){
         // this.message="payment failed";
            // Todo - store this information in the server
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
            //this.error = response.error.reason;
        }
    );
    }
    @HostListener('window:payment.success', ['$event'])
    onPaymentSuccess(event: any): void {
      this.message = "Success payment";

    }


}

