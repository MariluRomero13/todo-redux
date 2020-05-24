import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/todo';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterValue } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  actualFilter: filterValue;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todo => this.todos = todo);
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.actualFilter = filter;
    });
  }

}
