import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadfestivalComponent } from './downloadfestival/downloadfestival.component';

const routes: Routes = [  { path: '', component: DownloadfestivalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
