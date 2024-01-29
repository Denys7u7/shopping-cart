import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectItemsCart } from 'src/app/store/selectors/items.selectors';
import { Item } from '../content/content.component';
import { removeItemsCart } from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  items$ = this.store.select(selectItemsCart);
  items!: Item[];
  total!: number;

  constructor(private store: Store) {
    this.items$.subscribe({
      next: (value) => {
        this.items = value;
        this.calculeTotal();
      },
    });
  }

  removeItem(index: number) {
    let itemsAux: Item[] = [];
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      if (i != index) itemsAux.push(element);
    }
    this.store.dispatch(removeItemsCart({ items: itemsAux }));
  }

  calculeTotal() {
    let totalAux = 0;
    this.items.forEach((item) => {
      totalAux = totalAux + item.price;
    });
    this.total = totalAux;
  }
}
