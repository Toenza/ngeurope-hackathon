import { AlbumAction, LOAD_ALBUMS_SUCCESS } from "../actions";
import { Album } from "../../models/album.model";

export interface AlbumsState {
  selected: Album;
  albums: Album[];
}

export const intialState = {
  selected: null,
  albums: []
};

export function albumsReducer(state = intialState, action: AlbumAction) {
  switch (action.type) {
    case LOAD_ALBUMS_SUCCESS: {
      return { ...state, albums: action.payload };
    }
  }
  return state;
}

export const getAlbums = (state: AlbumsState) => state.albums;
export const getSelectedAlbum = (state: AlbumsState) => state.selected;
