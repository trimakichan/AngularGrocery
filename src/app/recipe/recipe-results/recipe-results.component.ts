import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent {

  @Input() recipeData: any

  constructor() {

  }


}
