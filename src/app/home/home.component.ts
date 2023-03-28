import { Component } from '@angular/core';
import { RecipeService} from '../services/recipe.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recipeResults: any = []

constructor(private recipeService:RecipeService, private router: Router) {}


  doSearch(searchValue: any) {
    console.log('SearchValue-AppCompo:', searchValue)
    this.recipeService.getRecipe(searchValue).subscribe(result => {
      console.log('Data From API:', result);
      this.recipeResults = result.results
      console.log('recipeResults:',this.recipeResults)
      this.router.navigate(['reciperesults', this.recipeResults.id])

      
    })

  }
}
