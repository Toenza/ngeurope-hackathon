import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
