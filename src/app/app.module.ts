import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.component';

import { CovertToSpacePipe } from './shared/convert-to-space.pipe';
import { StartComponent } from './shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CovertToSpacePipe,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }