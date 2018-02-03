import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { PlayerModule } from './player/player.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PlayerModule,
    RouterModule.forRoot([
      { path: 'album', loadChildren: './album/album.module#AlbumModule' },
      { path: '', pathMatch: 'full', redirectTo: 'album' }
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
