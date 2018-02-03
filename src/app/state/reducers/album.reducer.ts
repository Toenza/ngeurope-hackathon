import { AlbumAction, LOAD_ALBUMS_SUCCESS, SELECT_ALBUM } from "../actions";
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
    case SELECT_ALBUM: {
      return { ...state, selected: action.payload };
    }
  }
  return state;
}

export const getAlbums = (state: AlbumsState) => state.albums;
export const getSelectedAlbum = (state: AlbumsState) => state.selected;
