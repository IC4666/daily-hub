import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  getTodosFromApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Array<Todo>>(url);
  }

  // todoItems: Array<Todo> = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: 'Buy groceries',
  //     completed: false
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: 'Walk the dog',
  //     completed: true
  //   }  
  // ]
  
  constructor() { }
}
