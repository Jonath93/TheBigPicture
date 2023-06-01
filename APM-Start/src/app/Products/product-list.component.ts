import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
})

export class ProductListComponent implements OnInit,OnDestroy{

    pageTitle:string = 'Product List'
    imageWidth:number=50;
    imageMargin:number= 2;
    showImage:boolean = true;
    txtImage:string = 'Hide'
    products:IProduct[] = [];
    filteredProducts:IProduct[] = [];
    errorMessage:string = ''
    sub!: Subscription;
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
      this.sub = this.productService.getProducts().subscribe({
        next:x =>{ 
          this.products = x 
          this.filteredProducts= this.products;

        },
        error:err =>this.errorMessage =err
       });
    }
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
    onRatingClicked(message:string):void{
      this.pageTitle = 'Product List: '+message;
    }
}