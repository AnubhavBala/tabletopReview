import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import{ReviewService} from './review/review.service';
@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
