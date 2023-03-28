import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeResultsComponent } from './recipe/recipe-results/recipe-results.component';
import {GroceryComponent} from './grocery/grocery.component'
import {RecipeSearchComponent} from './recipe/recipe-search/recipe-search.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: RecipeSearchComponent },

  {path: 'reciperesults', component: RecipeResultsComponent },
  {path: 'grocery', component: GroceryComponent }

 
  
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
