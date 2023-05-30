import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'pm-start',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StartComponent implements OnChanges{
    cropWidth:number = 75;
    @Input() rating:number = 4;

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
    }
    onClick():void{
        console.log(`the rating ${this.rating} was clicked!`)
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`)
    }
}