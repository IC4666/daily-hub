import { Component, inject, OnInit } from '@angular/core';
import { TodosComponent } from '../../components/todos/todos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ TodosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{


}
