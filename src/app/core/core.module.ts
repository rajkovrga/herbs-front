import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';


const routes : Routes = [{
  path:"",
  component:LayoutComponent,
  children:[
  {
    path: "contact",
    loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:"herbs",
    loadChildren: () => import('../herbs/herbs.module').then(m => m.HerbsModule)
  },
  {
    path:"herb/:id",
    loadChildren: () => import('../herb/herb.module').then(m => m.HerbModule)
  },
  {
    path:"",
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path:"home",
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path:"profile",
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path:"auth",
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"not-found",
    loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
  }
  ,
  {
    path:"**",
    loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule)
  }
]
}];

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
  NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoreModule { }
