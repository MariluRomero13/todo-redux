import { Component, OnInit } from '@angular/core';
import { filterValue, setFilter } from '../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { borrarCompletado } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  pendientes = 0;
  actualFilter: filterValue = 'todos';
  filters: filterValue[] = ['todos', 'completado', 'pendiente', 'borrar'];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter =>  {this.actualFilter = filter;});
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  changeFilterSelected(newfilter: filterValue) {
    if (newfilter === 'borrar') {
      this.store.dispatch(borrarCompletado());
    } else {
      this.store.dispatch(setFilter({ filter: newfilter }));
    }
  }
}
