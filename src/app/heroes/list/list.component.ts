import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['spiderman', 'Ironman', 'Hulk', 'Dr.Strange', 'Capitan America']
  public deletedHero?: string;

  lastHeroDeleted(): void{
   this.deletedHero = this.heroName.pop();
  }
}
