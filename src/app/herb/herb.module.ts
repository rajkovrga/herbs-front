import { HerbItemComponent } from './components/herb-item/herb-item.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerbContentComponent } from './components/herb-content/herb-content.component';
import { HerbCommentsComponent } from './components/herb-comments/herb-comments.component';

const routes : Routes = [
  {
    path:"",
    component: HerbItemComponent
  }
]

@NgModule({
  declarations: [HerbItemComponent, HerbContentComponent, HerbCommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class HerbModule { }
