import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  arr:Product[]=[

    {
    productTitle:"Cam-1",
    description:"Cam-1 108 Mp Flash Auto Price is 42,000",
    productImage:"https://ace.electronicsforu.com/wp-content/uploads/2020/02/Nikon-300x200.png"
    },
    {
    productTitle:"Cam-2",
    description:"Cam-2 118 Mp Flash Auto Price is 25,000",
    productImage:"http://timlaarman.com/wp-content/uploads/2020/08/history-of-the-camera-300x200.jpg"
    },
    
    {
    productTitle:"Cam-3",
    description:"Cam-3 150 Mp Flash Auto Price is 15,000",
    productImage:"https://anaheiminn.com/wp-content/uploads/sites/71/2017/12/GettyImages-610259354-300x200-300x200.jpg"
    },
    
    {
    productTitle:"Cam-4",
    description:"Cam-4 50 Mp Flash Auto Price is 8,000",
    productImage:"https://bestgimbal.com/wp-content/uploads/2018/08/guide-to-picking-the-best-vlogging-camera-300x200.jpg"
    },
    
    {
    productTitle:"Cam-5",
    description:"Cam-5 108 Mp Flash Auto Price is 32,000",
    productImage:"https://epfilms.tv/wp-content/uploads/2015/02/Rebelt5icamera-300x200.jpg"
    },
    
    {
    productTitle:"Cam-6",
    description:"Cam-6 75 Mp Flash Auto Price is 12,000",
    productImage:"https://bestdeal.co.in/wp-content/uploads/2021/03/dslr-camera-300x200.jpg"
    }
    ];

    productsReceived=[];

    receivedData(productTitle){

     
      this.productsReceived.push(productTitle);
    }
}
