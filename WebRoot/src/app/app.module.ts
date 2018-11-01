import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import {ReviewService} from './review/review.service';
import { DndComponent } from './dnd/dnd.component';
import { DndService } from './dnd/dnd.service';
@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    DndComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [ReviewService,DndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
