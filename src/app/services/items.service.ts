import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from '../components/content/content.component';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private db: AngularFireDatabase) {}

  getAllItems(): Observable<Item[]> {
    return this.db.list('/products').valueChanges() as Observable<Item[]>;
  }
}
