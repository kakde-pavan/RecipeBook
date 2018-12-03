import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import{RecipeServices} from '../recipes/recipe.services';
import{Response} from '@angular/core';
import{Recipe} from '../recieps/recipe.model.ts';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService{
constructor(private http:Http, private recipeService:RecipeServices ){}

storeRecipes(){
      return this.http.put("https://ng-recipe-book-4e6cc.firebaseio.com/recipes.json",this.recipeService
       .getRecipes());
}

getRecipes(){

  this.http.get("https://ng-recipe-book-4e6cc.firebaseio.com/recipes.json")
.subscribe((response:Response)=>{
       const recipes:Recipe[]=response.json();
       this.recipeService.setRecipes(recipes);
      console.log(recipes);
    }
);
}
}
