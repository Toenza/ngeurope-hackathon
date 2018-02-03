import { Album } from './../../models/album.model';
import { Observable } from 'rxjs/Observable';
import { LoadAlbumsFail } from './../actions/album.actions';
import { GetAccessTokenService } from './../../get-access-token.service';
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { LOAD_ALBUMS, LoadAlbumsSuccess } from "../actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

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
    switchMap(() => this.tokenService.getUserRecommendations()),
    map(al => this.translateAlbum(al)),
    map((al) => new LoadAlbumsSuccess(al)),
    catchError(e => of(new LoadAlbumsFail(e)))
    );

  constructor(private actions$: Actions, private tokenService: GetAccessTokenService) { }

  translateAlbum(al: any): Album[] {
    return al.items.map(i => {
      return {
        title: i.album.name,
        description: i.album.label,
        duration: 999,
        tracklist: i.album.tracks.items.map(v => ({ title: v.name, duration: 999, preview_url: v.preview_url })),
        id: i.album.id
      };
    });
  }
}

