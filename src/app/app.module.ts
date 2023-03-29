import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import { RecipeResultsComponent } from './recipe/recipe-results/recipe-results.component';
import { RecipeSearchComponent } from './recipe/recipe-search/recipe-search.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    RecipeResultsComponent,
    RecipeSearchComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
