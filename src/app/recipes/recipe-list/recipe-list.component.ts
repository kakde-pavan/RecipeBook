import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute  } from '@angular/router';
import { Recipe } from '../recipe.model';
import {RecipeServices} from '../recipe.services';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {



  recipes: Recipe[];
  constructor(private recipeservices:RecipeServices,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipeservices.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
      this.recipes=recipes;
    }
  );

    this.recipes=this.recipeservices.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
