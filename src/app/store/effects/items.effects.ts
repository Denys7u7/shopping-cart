import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { loadItems, loadItemsSuccess } from '../actions/items.actions';
import { ItemsService } from 'src/app/services/items.service';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(() =>
        this._itemsService.getAllItems().pipe(
          map((items) => {
            return loadItemsSuccess({ items });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private _itemsService: ItemsService) {}
}
