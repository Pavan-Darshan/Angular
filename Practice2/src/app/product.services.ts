import { Product } from "./product";

export class ProductServices{

    getProduct(){

  let product:Product[];

  product=[
    new Product(1,'Memory Card',500),
    new Product(2,'Pen Drive',750),
    new Product(3,'Power Bank',100) ];

    
    return product;

    }

}