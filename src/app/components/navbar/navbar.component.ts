import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  selectItems,
  selectItemsCart,
} from 'src/app/store/selectors/items.selectors';
import { Item } from '../content/content.component';
import {
  loadItems,
  loadSearchItems,
} from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartItems$ = this.store.select(selectItemsCart);
  items$ = this.store.select(selectItems);
  items!: Item[];
  cartItems!: Item[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartItems$.subscribe((success) => (this.cartItems = success));
    this.items$.subscribe((success) => (this.items = success));
  }

  searchItems(value: string) {
    if (value == '') {
      this.store.dispatch(loadItems());
    } else {
      let itemsAux = this.items.filter((item: Item) => {
        return item.name.includes(value);
      });
      this.store.dispatch(loadSearchItems({ items: itemsAux }));
    }
  }
}
