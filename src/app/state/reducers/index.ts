import { PlayerState, playerReducer } from "./player.reducer";
import { ActionReducerMap } from "@ngrx/store/src/models";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAlbums from "./album.reducer";

export interface State {
  player: PlayerState;
  albums: fromAlbums.AlbumsState;
}

export const reducers: ActionReducerMap<State> = {
  player: playerReducer,
  albums: fromAlbums.albumsReducer
};

export const getAlbumsState = (state: State) => state.albums;
export const getAlbums = createSelector(getAlbumsState, fromAlbums.getAlbums);
