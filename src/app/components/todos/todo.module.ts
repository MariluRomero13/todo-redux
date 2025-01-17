import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/todo/filter.pipe';



@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemComponent,
    TodoListComponent, TodoPageComponent, FilterPipe],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
