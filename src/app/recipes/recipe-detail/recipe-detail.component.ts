import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { 
    this.recipe = new Recipe('A Test Recipe', 'This A Test Recipe description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg');
  }

  ngOnInit() {
  }

}
