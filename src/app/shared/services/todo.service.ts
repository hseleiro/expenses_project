import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'http://localhost:4000/api/todos/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteTodo(id: string | undefined): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post(this.url, todo);
  }

  getTodo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateTodo(id: string | null, todo: any): Observable<any> {
    return this.http.put(this.url + id, todo);
  }
}
