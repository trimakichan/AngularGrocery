import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent implements OnInit {

  
  @Input() recipeData: any

  constructor() {

  }
  ngOnInit(): void {
 
  }
  
  test() {
    console.log('recipe data:',this.recipeData)
  }



}
