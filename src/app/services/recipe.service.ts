import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import {Observable} from 'rxjs'
import {map} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipe(input:any):Observable<any>{
    console.log('input:', input)
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${environment.appId}`)

  }

  getRecipeDetails(id:any):Observable<any> {
    console.log('id in service:', id) 
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${environment.appId}&includeNutrition=false`)
  }

}
