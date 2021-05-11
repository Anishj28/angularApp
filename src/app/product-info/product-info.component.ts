import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent{

 @Input() sampleObj:Product;

 @Output() customEvent = new EventEmitter();


 sendDetails(productTitle) {
   this.customEvent.emit(productTitle);
 }


}
