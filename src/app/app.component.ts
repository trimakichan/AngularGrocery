import { Component } from '@angular/core';
import { RecipeService} from './services/recipe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularGrocery';
  recipeResults: any = []

  constructor(private recipeService: RecipeService){}

  doSearch(searchValue: any) {
    console.log('SearchValue-AppCompo:', searchValue)
    this.recipeService.getRecipe(searchValue).subscribe(result => {
      console.log('Data From API:', result);
      this.recipeResults = result.results
      console.log('recipeResults:',this.recipeResults)
      
    })

  }
}
