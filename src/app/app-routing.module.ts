import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListFilmsComponent } from './pages/page-list-films/page-list-films.component';

const routes: Routes = [
  { path: 'list-films', component: PageListFilmsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
