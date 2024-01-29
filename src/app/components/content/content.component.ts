import { selectItems } from './../../store/selectors/items.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemsService } from 'src/app/services/items.service';
import { loadItems } from 'src/app/store/actions/items.actions';

export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  categories?: string[];
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  items$ = this.store.select(selectItems);
  thereIsItems = true;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
    //timer(2000).subscribe(() => (this.items = this.generateItems(20)));
  }

  generateItems(quantity: number): Item[] {
    let itemsArrayGenerated: Item[] = [];

    for (let index = 1; index <= quantity; index++) {
      itemsArrayGenerated.push({
        id: index,
        name: `Producto name ${index}`,
        price: 10.67,
        image: '',
      });
    }

    return itemsArrayGenerated;
  }
}
