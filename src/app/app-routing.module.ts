import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRoleComponent } from './add-role/add-role.component';

const routes: Routes = [
  { path : '' , component: HomeComponent},
  { path : 'add' , component: AddRoleComponent},
  { path : 'add/:id' , component: AddRoleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
