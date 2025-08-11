import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../model/todo.type';
import { catchError } from 'rxjs';
import { GlassEffectComponent } from '../glass-effect/glass-effect.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, GlassEffectComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  getTodos = inject(TodosService);
  todoList = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.getTodos.getTodosFromApi().pipe(
      catchError(error => {
        console.error('Error fetching todos:', error);
        throw error;
      })
    ).subscribe((todos)=>{
      this.todoList.set(todos);
    })
    // this.todoList.set(this.getTodos.todoItems);
  }
  
}
