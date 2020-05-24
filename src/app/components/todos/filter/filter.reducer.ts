import { filterValue, setFilter } from './filter.actions';
import { createReducer, on } from '@ngrx/store';



export const initialState: filterValue = 'todos';
export const _filterReducer = createReducer(initialState,
  on(setFilter, (state, { filter }) => filter )
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
