import { DndComponent } from './dnd/dnd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'reviews', component: ReviewComponent },
  { path: 'dnd', component: DndComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }