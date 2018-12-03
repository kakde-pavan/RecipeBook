import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent}  from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective}from './shared/dropdown.directive';

import {ShoppingListServices} from './shopping-list/shopping-list.services';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import {RecipeServices} from './recipes/recipe.services';
import {DataStorageService} from './shared/data-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListServices,RecipeServices,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
