import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/mainpage.component';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
    ]
})
export class DbzModule { }
