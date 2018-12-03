import {Ingredient} from  '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';



export class ShoppingListServices{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing= new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  getIngredieants(){
      return this.ingredients.slice();
  }

  getIngredieant(index:number){
      return this.ingredients[index];
  }
  addIngredient(ingredieant:Ingredient){
    this.ingredients.push(ingredieant);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice( ))
  }

  updateIngredieant(index :number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  }
