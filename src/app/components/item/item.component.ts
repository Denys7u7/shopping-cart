import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../content/content.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  addItemToCart,
  loadCurrentItem,
} from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {}

  redirectToDetail() {
    this.store.dispatch(loadCurrentItem({ item: this.item }));
    this.router.navigate(['detail']);
  }

  addToCart() {
    this.store.dispatch(addItemToCart({ item: this.item }));
  }
}
