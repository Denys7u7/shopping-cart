import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/components/content/content.component';

export const loadItems = createAction('[Content Component] Load Items');

export const loadItemsSuccess = createAction(
  '[Content Component] Load Items Successfully',
  props<{ items: Item[] }>()
);

export const loadSearchItems = createAction(
  '[Navbar Component] Load Search Items Successfully',
  props<{ items: Item[] }>()
);

export const loadCurrentItem = createAction(
  '[Item Detail Component] Load Items Currently',
  props<{ item: Item }>()
);

export const addItemToCart = createAction(
  '[Item Component] Add New Item To Cart',
  props<{ item: Item }>()
);

export const removeItemsCart = createAction(
  '[Cart Component] Remove Items To Cart',
  props<{ items: Item[] }>()
);
