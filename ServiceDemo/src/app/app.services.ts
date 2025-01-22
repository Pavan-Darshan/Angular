import { Injectable } from "@angular/core";

interface ProductType{
    productId:number,
    name:string,
    price:number
}
@Injectable(
    {
        providedIn:'root'
    }
)

export class Services{
        count=0;
    product: [ProductType,{}]=[{productId:1,name:"Book",price:200},
        {productId:2,name:"Book",price:500} 
    ]


    getProduct()
    {
        return this.product;
    }
}

