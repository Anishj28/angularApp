import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent  {

  arr2=[

    {
    productTitle:"Royal Enfeild",
    description:"Bullet Bike",
    productImage:"https://5.imimg.com/data5/LJ/FO/NK/SELLER-7777732/keychains-car-bike-shape-acrylic-250x250.jpg"
    },
    {
    productTitle:"KTM",
    description:"KTM naked 500 Street racer",
    productImage:"https://m.media-amazon.com/images/I/51d-D7Pvj6L._AC_SS250_.jpg"
    },
    
    {
    productTitle:"BMW",
    description:"BMW thunder bolt",
    productImage:"https://5.imimg.com/data5/OA/SD/MY-3027995/police-bike-bmw-bike-250x250.jpg"
    },
    
    ]
}
