import { createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/components/content/content.component';
import {
  addItemToCart,
  loadCurrentItem,
  loadItemsSuccess,
  loadSearchItems,
  removeItemsCart,
} from '../actions/items.actions';

export interface InitialState {
  items: Item[];
  currentItem: Item;
  itemsCart: Item[];
}

export const initialState: InitialState = {
  items: [],
  currentItem: {
    id: 0,
    name: '',
    image: '',
    price: 0,
  },
  itemsCart: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, actions) => {
    return {
      ...state,
      items: actions.items,
    };
  }),
  on(loadCurrentItem, (state, actions) => {
    return {
      ...state,
      currentItem: actions.item,
    };
  }),
  on(addItemToCart, (state, actions) => {
    return {
      ...state,
      itemsCart: [...state.itemsCart, actions.item],
    };
  }),
  on(removeItemsCart, (state, actions) => {
    return {
      ...state,
      itemsCart: actions.items,
    };
  }),
  on(loadSearchItems, (state, actions) => {
    return {
      ...state,
      items: actions.items,
    };
  })
);
