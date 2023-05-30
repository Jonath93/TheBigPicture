import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
})

export class ProductListComponent implements OnInit{

    pageTitle:string = 'Product List'
    imageWidth:number=50;
    imageMargin:number= 2;
    showImage:boolean = true;
    txtImage:string = 'Hide'
    products:IProduct[] = [];
    filteredProducts:IProduct[] = [];
    constructor(private productService:ProductService){}

    private _listFilter:string = '';

    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string){
       this._listFilter = value;
        this.filteredProducts = this.perfomFilter(value);
    }

    toggleImage():void{
      this.showImage = !this.showImage;
      this.txtImage = (this.showImage)?'Hide':'Show';

    }
    perfomFilter(filterBy:string):IProduct[]{
      filterBy= filterBy.toLocaleLowerCase();
      return this.products.filter((x:IProduct)=> x.productName.toLocaleLowerCase().includes(filterBy) );
    }
    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts= this.products;
    }
    onRatingClicked(message:string):void{
      this.pageTitle = 'Product List: '+message;
    }
}