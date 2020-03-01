import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { DialogPasswordChangeComponent } from './components/dialog-password-change/dialog-password-change.component';
import { MatDialogModule } from '@angular/material/dialog';


const routes : Routes = [
  {
    path:"",
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent, ProfileContentComponent, DialogPasswordChangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ],
  exports:[
    RouterModule
  ],
  entryComponents: [DialogPasswordChangeComponent]
})
export class ProfileModule { }
