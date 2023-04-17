import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  title:string = 'Counter'
  counter:number = 10;


 upgrade(value:number):void {
    this.counter += value
  }
  resetCounter(){
    this.counter = 10
  }


  
}
