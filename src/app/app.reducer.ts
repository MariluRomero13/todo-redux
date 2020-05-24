
import { Todo } from './components/todos/models/todo';
import { filterValue } from './components/todos/filter/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './components/todos/todo.reducer';
import { filterReducer } from './components/todos/filter/filter.reducer';
export interface AppState {
  todos: Todo[];
  filter: filterValue;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}

