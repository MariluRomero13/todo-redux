import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from './../models/todo';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('editInput', {static: true}) editInput: ElementRef;
  editTxt: FormControl;
  completedChk: FormControl;
  editing = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
    this.completedChk.valueChanges.subscribe(() => {
      this.store.dispatch(toggle({id: this.todo.id}));
    });
  }

  createForm(): void {
    this.completedChk = new FormControl(this.todo.completado);
    this.editTxt = new FormControl(this.todo.texto, Validators.required);
  }

  change() {
    this.editing = true;
    this.editTxt.setValue(this.todo.texto);
    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 1);
  }

  finish() {
    this.editing = false;

    if (this.editTxt.invalid) { return; }
    if (this.editTxt.value === this.todo.texto) { return; }

    this.store.dispatch(editar({id: this.todo.id, texto: this.editTxt.value}));
  }

  delete() {
    this.store.dispatch(borrar({id: this.todo.id}));
  }

}
