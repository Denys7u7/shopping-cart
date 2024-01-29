import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { ItemComponent } from './components/item/item.component';
import { ItemsDetailComponent } from './components/items-detail/items-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { itemsReducer } from './store/reducers/items.reducer';
import { ItemsService } from './services/items.service';
import { ItemsEffects } from './store/effects/items.effects';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {NgIdleModule} from '@ng-idle/core'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    ItemComponent,
    ItemsDetailComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    StoreModule.forRoot({ storage: itemsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ItemsEffects]),
    NgIdleModule.forRoot(),
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
