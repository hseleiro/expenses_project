import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoApiActions, TodoPageActions} from "./actions";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../../shared/services/todo.service";
import {Todo} from "../../../shared/models/todo";
import {TodoProps} from "../../../shared/interfaces/todoProps";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
              private store: Store,
              private todoService: TodoService)
  {
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(TodoPageActions.enter());
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(todos => {
      console.log('todos', todos);
      this.store.dispatch(TodoApiActions.todosLoaded({ todos: todos}))
    })
  }
  // onSelect(todo: Todo) {
  //   this.store.dispatch(TodoPageActions.selectTodo({todoId: todo.id}));
  // }

  // removeSelectedTodo() {
  //   this.store.dispatch(TodoPageActions.clearSelectedTodo())
  // }

  createTodo() {
    this.store.dispatch(TodoPageActions.createTodo({ todo: this.todoForm.value}))
    this.todoService.createTodo(this.todoForm.value).subscribe((todo) => {
      this.store.dispatch(TodoApiActions.todoCreated({todo: this.todoForm.value}))
    })
  }

  updateTodo(todo: Todo) {
    this.store.dispatch(TodoPageActions.updateTodo({ todoId: todo.todoId, changes: todo}))
    this.todoService.updateTodo(todo.todoId, todo).subscribe((todo) => {
      this.store.dispatch(TodoApiActions.todoUpdated({todo}))
    })
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(TodoPageActions.deleteTodo({todoId: todo.todoId}))
    this.todoService.deleteTodo(todo.todoId).subscribe(() => {
      this.store.dispatch(TodoApiActions.todoDeleted({todoId: todo.todoId}))
    })
  }



}
