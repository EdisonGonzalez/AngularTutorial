import { Component, OnInit } from '@angular/core';
import { extend } from '../../node_modules/webdriver-js-extender';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(
    public ser:ApiService
  ){
    setInterval(()=>{
      console.log("app "+this.ser.name)
     },10000);

  }

  

  
}
