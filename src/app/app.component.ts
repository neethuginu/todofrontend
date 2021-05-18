import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DataService} from './service/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{

  datas:any=[{}] ;
 public _getUrl="http://localhost:8000/display";


  constructor(private dataService:DataService,private http:HttpClient ){

  }



  ngOnInit(){

    this.http.get(this._getUrl).subscribe((response)=>{
      this.datas=response;
      console.log(this.datas)


    })
    // this.dataService.getData().subscribe((response: any)=>this.data=response)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
  }
 
  
  
}

