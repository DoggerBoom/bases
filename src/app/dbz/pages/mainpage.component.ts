import { Component, input } from "@angular/core";
import { Character } from "../interfaces/character.interface";




@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'mainpage.component.html'
})


export class MainPageComponent {


public characters: Character[] = [{
  name: 'Krillin',
  power: 1000
},
{
  name: 'Goku',
  power: 9000
},
{
  name: 'vegeta',
  power: 7500
}]

}