import { Component, OnInit ,OnDestroy} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListServices} from './shopping-list.services';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients: Ingredient[];

  private subscription :Subscription;
  constructor(private slservice:ShoppingListServices) { }



  ngOnInit() {
    this.ingredients=this.slservice.getIngredieants();
    this.subscription=this.slservice.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[]) => {
      this.ingredients=ingredients;
    }

  );
  }

onEditItem(index:number){
    this.slservice.startedEditing.next(index);
    
}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }





}
