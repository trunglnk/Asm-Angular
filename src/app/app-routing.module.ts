import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishManagerComponent } from './dish-manager/dish-manager.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dish-manager', component: DishManagerComponent},
    {path: 'dish-detail/:dishID', component: DishDetailComponent},
    {path: 'dish-list', component: DishListComponent},
    {path: 'add-dish', component: AddDishComponent},
    {path: 'dish', component: DishComponent},
    {path: 'dish/:dishID', component: DishDetailComponent},
    {path: 'dish/edit/:dishID', component: EditDishComponent},

  ]
  },
  {path: 'menu', component: DishMenuComponent},
  {path: 'about', component:AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'dish', component: DishComponent},
  {path: 'dish/:dishID', component: DishDetailComponent},

  // {path: 'dish-list', component: DishListComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}