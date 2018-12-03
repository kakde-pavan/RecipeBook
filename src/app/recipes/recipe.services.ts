import {Injectable} from "@angular/core"

import {Recipe} from "./recipe.model"
import{Ingredient} from "../shared/ingredient.model";
import{ShoppingListServices} from "../shopping-list/shopping-list.services";
import{Subject} from 'rxjs/Subject';

@Injectable()

export class RecipeServices{

recipeChanged= new  Subject<Recipe[]>();

  private recipes: Recipe[]=[
    new Recipe(
      'pav bhaji Recipeeeeeeee',
    'testy',
    'http://xantilicious.com/wp-content/uploads/2017/01/IMG_1360123.jpg',
    [
      new Ingredient('pav',2),
      new Ingredient('Butter',4)
    ]
  ),
    new Recipe('pav bhaji ',
    'testy',
    'http://xantilicious.com/wp-content/uploads/2017/01/IMG_1360123.jpg',
    [
      new Ingredient('pav',2),
      new Ingredient('Butter',4)
    ]
  )
  ];

  constructor(private slservice:ShoppingListServices){

  }

setRecipes(recipes:Recipe[]){
  this.recipes=recipes;
  this.recipeChanged.next(this.recipes.slice());  
}

  getRecipes() {
  return this.recipes.slice();
}

getRecipe(index:number){
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.slservice.addIngredients(ingredients);
}

addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
}
updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
}

deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipeChanged.next(this.recipes.slice());
}
}
