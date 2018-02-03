import { Action } from "@ngrx/store";
import { Song } from "../../models/song.model";

export const PLAY = "PLAY";
export const STOP = "STOP";
export const PAUSE = "PAUSE";
export const MUTE = "MUTE";

export class PlayAction implements Action {
  readonly type = PLAY;
  constructor(public payload: Song) {}
}

export type PlayerAction = PlayAction;
