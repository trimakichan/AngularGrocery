// import { outputAst } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit{



searchResult = new FormControl('', [Validators.minLength(2)]);

@Output () searchEvent = new EventEmitter<string | any>()

// searchForm = new FormGroup ({
//   'recipeName': new FormControl('null')
// })


ngOnInit(): void {
  this.searchResult.valueChanges
  .pipe(debounceTime(1000))
  .subscribe(Searchvalue => {
    if(!this.searchResult.invalid) {
      // console.log(Searchvalue)
      this.searchEvent.emit(Searchvalue)
    }
  })
}

// submitForm(searchResult) {
//   console.log(this.searchResult)
// this.serivce.getRecipe(this.searchResult).subscribe((result) => {
//   console.log('searchResults:', result);
//   this.searchResult = result})
// }

}
