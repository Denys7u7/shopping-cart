import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InitialState } from '../reducers/items.reducer';

export const selectStorage = createFeatureSelector<InitialState>('storage');

export const selectItems = createSelector(
  selectStorage,
  (state) => state.items
);

export const selectItemsCart = createSelector(
  selectStorage,
  (state) => state.itemsCart
);

export const selectCurrentItem = createSelector(
  selectStorage,
  (state) => state.currentItem
);
