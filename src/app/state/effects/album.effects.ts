import { Observable } from 'rxjs/Observable';
import { LoadAlbumsFail } from './../actions/album.actions';
import { GetAccessTokenService } from './../../get-access-token.service';
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { LOAD_ALBUMS, LoadAlbumsSuccess } from "../actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Album } from "../../models/album.model";

const albumsMock: Album[] = [
  {
    description: "album description",
    title: "album tilte",
    tracklist: [{ title: "First song", duration: 204 }],
    duration: 105,
    id: "0"
  }
];
@Injectable()
export class AlbumEffects {
  @Effect()
  loadAlbums$ = this.actions$
    .ofType(LOAD_ALBUMS)
    .pipe(
      switchMap(() => {
        return this.tokenService.getUserRecommendations()
        .pipe(
          catchError(e => of(new LoadAlbumsFail(e)))
        )
      }),
      map((al) => new LoadAlbumsSuccess(al)));

  constructor(private actions$: Actions, private tokenService: GetAccessTokenService) {}
}
