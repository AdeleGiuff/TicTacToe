import { createAction, props } from '@ngrx/store';

export const nuovaPartita = createAction('GRIGLIA/nuovaPartita');
export const faiUnaMossa = createAction(
  'GRIGLIA/faiUnaMossa',
  props<{ index: number }>()
);
export const calcolaVincitore = createAction('GRIGLIA/calcolaVincitore');
