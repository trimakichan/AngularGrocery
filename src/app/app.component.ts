import { Component, HostListener } from '@angular/core';
import { RecipeService} from './services/recipe.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularGrocery';
  navbg: any;
  test: any = 'hi'
  // recipeResults: any = []

  constructor(private recipeService: RecipeService){}



  @HostListener('document:scroll') scrollover() {

    
    if ((document.body.scrollTop > 0) || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000'
      }
    } else {
      this.navbg = {}
}
  }
}

  // doSearch(searchValue: any) {
  //   console.log('SearchValue-AppCompo:', searchValue)
  //   this.recipeService.getRecipe(searchValue).subscribe(result => {
  //     console.log('Data From API:', result);
  //     this.recipeResults = result.results
  //     console.log('recipeResults:',this.recipeResults)
      
  //   })

  // }

