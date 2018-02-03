import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    StoreDevtoolsModule.instrument(),
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
