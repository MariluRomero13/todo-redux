
import { createAction, props } from '@ngrx/store';

export type filterValue = 'todos'|'completado'|'pendiente'|'borrar';
export const setFilter = createAction('[TODO] setFilter',
  props<{filter: filterValue}>());
