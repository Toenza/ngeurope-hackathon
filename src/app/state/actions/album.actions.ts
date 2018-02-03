import { Action } from "@ngrx/store";
import { Album } from "../../models/album.model";

export const LOAD_ALBUMS = "LOAD_ALBUMS";
export const LOAD_ALBUMS_SUCCESS = "LOAD_ALBUMS_SUCCESS";
export const LOAD_ALBUMS_FAIL = "LOAD_ALBUMS_FAIL";
export const SELECT_ALBUM = "SELECT_ALBUM";

export class LoadAlbums implements Action {
  readonly type = LOAD_ALBUMS;
}
export class SelectAlbum implements Action {
  readonly type = SELECT_ALBUM;
  constructor(public payload: Album) {}
}
export class LoadAlbumsSuccess implements Action {
  readonly type = LOAD_ALBUMS_SUCCESS;
  constructor(public payload: Album[]) {
    console.log(payload);
  }
}
export class LoadAlbumsFail implements Action {
  readonly type = LOAD_ALBUMS_FAIL;
  constructor(public payload: any) {}
}

export type AlbumAction =
  | LoadAlbums
  | LoadAlbumsSuccess
  | LoadAlbumsFail
  | SelectAlbum;
