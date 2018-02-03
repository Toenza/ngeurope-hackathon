import { GetAccessTokenService } from './get-access-token.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// not used in production
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";
import { PlayerModule } from "./player/player.module";
import { RouterModule } from "@angular/router";
import { reducers } from "./state/reducers";
import { PlayerEffects } from "./state/effects";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PlayerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PlayerModule,
    RouterModule.forRoot([
      { path: "album", loadChildren: "./album/album.module#AlbumModule" },
      { path: "", pathMatch: "full", redirectTo: "album" }
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [GetAccessTokenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
