import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { FormGroup, FormControl,FormArray,Validators} from '@angular/forms';
import {RecipeServices} from  '../recipe.services';
import {Recipe} from '../../recipes/recipe.model'
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup ;
  constructor(private   route:ActivatedRoute,
              private recipeservice:RecipeServices,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.initForm();

    }
  );
  }

  onSubmit(){
    const newRecipe=new Recipe(
        this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imgpath'],
        this.recipeForm.value['ingredients']
    );
    if(this.editMode){
      this.recipeservice.updateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeservice.addRecipe(newRecipe);
    }
    this.onCancel();

  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl()
      })
    );
  }

onCancel(){
this.router.navigate(['../'],{relativeTo:this.route});

}

private initForm(){
  let recipeName ='';
  let recipeImagePath='';
  let recipeDescription='';
  let recipeIngredients=new FormArray([]);

  if(this.editMode){
    const recipe=this.recipeservice.getRecipe(this.id);
    recipeName=recipe.name;
    recipeImagePath=recipe.imgpath;
    recipeDescription=recipe.description;
    if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
         new FormGroup({
          'name':new FormControl(ingredient.name,Validators.required),
          'amount':new FormControl(ingredient.amount)
           })
           );
      }
   }

  }

  this.recipeForm=new FormGroup({
    'name':new FormControl(recipeName,Validators.required),
    'imgpath':new FormControl(recipeImagePath,Validators.required),
    'description':new FormControl(recipeDescription,Validators.required),
    'ingredients':recipeIngredients
  });
}

}
