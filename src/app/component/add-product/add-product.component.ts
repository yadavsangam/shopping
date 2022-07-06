import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { IProduct } from '../../iproduct';

@Inject(ApiService)
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // Initial Form data which is blank string
  product_title: FormControl = new FormControl("");
  product_price: FormControl = new FormControl("");
  product_category: FormControl = new FormControl("");
  product_description: FormControl = new FormControl("");
  product_image: FormControl = new FormControl("");

  constructor(private productService : ApiService) { }

  ngOnInit(): void {
  }

  
  save(){
    let product:IProduct = {
      productTitle: this.product_title.value,  //get the data from input
      productPrice: parseInt(this.product_price.value), //parseInt is used for converting a string into integer
      productCategory: this.product_category.value,
      productDescription: this.product_description.value,
      productImage: this.product_image.value,
      forEach: undefined,
      filter: function (arg0: (a: any) => any): IProduct {
        throw new Error('Function not implemented.');
      },
      price: undefined,
      category: '',
      total: 0
    };
    this.productService.addProduct(product);  // call add product from services
    alert("Product Added!");
  }

}
