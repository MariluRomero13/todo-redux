import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as action from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private store: Store<AppState>) { this.createForm(); }

  ngOnInit(): void {

  }

  createForm(): void {
    this.todoForm = new FormGroup({
      todoTxt: new FormControl('', Validators.required)
    });
  }

  create() {
    const todo = this.todoForm.get('todoTxt');
    if (todo.invalid) { return;}

    this.store.dispatch(action.crear({texto: todo.value}));
    todo.reset();
  }

}
