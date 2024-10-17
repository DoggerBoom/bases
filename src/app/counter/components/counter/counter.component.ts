import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h3>Counter: {{counter}}</h3>

<button (click)="incrementar(-1)">-1</button>
<button (click)="Reset()">Reset</button>
<button (click)="incrementar(+1)">+1</button>`
})

export class CounterComponent{
  public title: string = 'Mi primera APP con Angular';
  public counter: number = 10;

incrementar(value: number){
  this.counter += value;
}

Reset(){
  this.counter = 10;
}
}
