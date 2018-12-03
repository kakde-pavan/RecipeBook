import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeServices} from '../recipe.services';
import {ActivatedRoute,Params,Router} from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipe;
 id:number;

  constructor(private recipeService:RecipeServices,
              private route:ActivatedRoute,
              private router:Router) {
 }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
            this.id=+params['id'];
            this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }

  onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});

  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
     this.router.navigate(['/recipes']);
  }

}
