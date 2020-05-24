import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, completado, borrarCompletado } from './todo.actions';
import { Todo } from './models/todo';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Comer'),
  new Todo('Bañarse')
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggle, (state, {id}) => {
    // map() regresa un nuevo arreglo
    return state.map(todo => {
      if (todo.id === id) {
        return {
          // El operador spread -> ... extrae todas las propiedades que faltan por añadir
          // es decir, en este caso como estamos modificando la propiedad completad, con el ...todo
          // lo que hacemos es añadir las propiedades faltantes que es el id y el texto, dejando por fuera la propiedad
          // completado porque ya se está añadiendo con otro valor
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, {texto, id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(completado, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        // tslint:disable-next-line: object-literal-shorthand
        completado: completado
      };
    });
  }),
  on(borrarCompletado, (state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
