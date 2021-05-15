import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {

  arr1=[

    {
    productTitle:"Sony",
    description:"Sony Telivision",
    productImage:"https://5.imimg.com/data5/VL/JG/DA/SELLER-90675468/32-inch-sony-led-tv-250x250.jpg"
    },
    {
    productTitle:"Samsung",
    description:"samsung television",
    productImage:"https://4.imimg.com/data4/HG/WT/MY-21181300/samsung-led-smart-tv-250x250.jpg"
    },
    
    {
    productTitle:"LG",
    description:"Lg Television",
    productImage:"https://5.imimg.com/data5/BD/OI/MY-22772857/full-hd-lg-led-tv-250x250.jpg"
    },
    
    ]

}
