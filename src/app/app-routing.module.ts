import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishitemComponent } from './dishitem/dishitem.component';
import { DishlistComponent } from './dishlist/dishlist.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"dishes",component:DishlistComponent},
  {path:"rev/:id",component:ReviewComponent},
  {path:"dishitem/:id",component:DishitemComponent},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
