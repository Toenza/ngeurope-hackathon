import { Song } from "../../models/song.model";
import { PlayerAction, PLAY } from "../actions";

export interface PlayerState {
  playing: boolean;
  currentSong: Song;
  volume: number;
}
export const initialState: PlayerState = {
  playing: false,
  currentSong: null,
  volume: 1
};

export function playerReducer(
  state = initialState,
  action: PlayerAction
): PlayerState {
  switch (action.type) {
    case PLAY: {
      return { ...state, playing: true, currentSong: action.payload };
    }
  }
  return state;
}

export const getCurrentSong = (state: PlayerState) => state.currentSong;
export const getVolume = (state: PlayerState) => state.volume;
export const getIsPlaying = (state: PlayerState) => state.playing;
