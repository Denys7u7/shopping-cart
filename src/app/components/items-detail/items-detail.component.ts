import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectCurrentItem } from 'src/app/store/selectors/items.selectors';
import { Item } from '../content/content.component';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss'],
})
export class ItemsDetailComponent implements OnInit {
  currentItem$ = this.store.select(selectCurrentItem);
  currentItem!: Item;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentItem$.subscribe({
      next: (success) => (this.currentItem = success),
    });
  }
}
