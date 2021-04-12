import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishMenuComponent } from './dish-menu/dish-menu.component';
import { DishComponent } from './dish/dish.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishManagerComponent } from './dish-manager/dish-manager.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    DishMenuComponent,
    DishComponent,
    DishListComponent,
    DishDetailComponent,
    DishManagerComponent,
    AddDishComponent,
    EditDishComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
