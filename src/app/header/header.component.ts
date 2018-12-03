  import { Component, OnInit,EventEmitter,Output} from '@angular/core';

  import {DataStorageService} from '../shared/data-storage.service';
  import {Response} from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',})
export class HeaderComponent  {

constructor(private datastorageservice:DataStorageService){}

  onSaveData(){
        this.datastorageservice.storeRecipes()
        .subscribe(
          (response:Response)=>{
            console.log(response);
          }
        );
  }

  onFeatchData(){
    this.datastorageservice.getRecipes();
  }
}
