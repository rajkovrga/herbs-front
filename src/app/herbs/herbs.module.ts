import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HerbItemsComponent } from './components/herb-items/herb-items.component';

const routes : Routes = [
  {
    path:"",
    component: HerbItemsComponent
  }
]

@NgModule({
  declarations: [HerbItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports:[
    RouterModule
  ]
})
export class HerbsModule { }
