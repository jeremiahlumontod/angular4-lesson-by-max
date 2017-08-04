import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    //console.log('recipe-list component: recipeWasSelected fired, values are: ' + recipe.name + ' == ' + recipe.description + '==' + recipe.imagePath);    
    //this.recipeWasSelected.emit(recipe);
  }
  
}
