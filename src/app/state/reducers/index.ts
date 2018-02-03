import { PlayerState, playerReducer } from "./player.reducer";
import { ActionReducerMap } from "@ngrx/store/src/models";

export interface State {
  player: PlayerState;
}

export const reducers: ActionReducerMap<State> = {
  player: playerReducer
};
