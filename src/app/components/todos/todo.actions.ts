import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Todo] Crear', props<{texto: string}>());
export const toggle = createAction('[Todo] Toggle', props<{id: number}>());
export const editar = createAction('[Todo] Editar', props<{texto: string, id: number}>());
export const borrar = createAction('[Todo] Borrar', props<{id: number}>());
export const completado = createAction('[Todo] Completado', props<{completado: boolean}>());
export const borrarCompletado = createAction('[Todo] Borrar Completado');
