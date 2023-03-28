import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {RecipeService} from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent implements OnInit {

  // myParam: string;

  // @Input() recipeData: any

  constructor(private service: RecipeService,private route: ActivatedRoute) {}

  getRecipeDetails: any; 

  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    console.log('getParamID:', getParamId)
    this.getRecipe(getParamId)
    // this.route.params.subscribe((params: Params) => this.myParam = params['id']);
    // console.log('param:', this.myParam
  }
  
  getRecipe(id:any) {
  this.service.getRecipeDetails(id).subscribe(result => {
    console.log('Recipe Details:', result)
    this.getRecipeDetails = result;
    console.log(this.getRecipeDetails)
  })
  }




}
