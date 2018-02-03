import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { LOAD_ALBUMS, LoadAlbumsSuccess } from "../actions";
import { map } from "rxjs/operators/map";
import { Album } from "../../models/album.model";

const albumsMock: Album[] = [
  {
    description: "album description",
    title: "album tilte",
    tracklist: [{ title: "First song", duration: 204 }],
    duration: 105,
  }
];
@Injectable()
export class AlbumEffects {
  @Effect()
  loadAlbums$ = this.actions$
    .ofType(LOAD_ALBUMS)
    .pipe(map(() => new LoadAlbumsSuccess(albumsMock)));

  constructor(private actions$: Actions) {}
}
