import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../components/todos/models/todo';
import { filterValue } from '../components/todos/filter/filter.actions';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[] , filter: filterValue): Todo[] {
    switch (filter) {
      case 'completado':
          return todos.filter(todo => todo.completado);
      case 'pendiente':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
