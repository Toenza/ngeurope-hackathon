import { Component } from "@angular/core";
import { State } from "../state/reducers";
import { Store } from "@ngrx/store";
import { PlayAction } from "../state/actions";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent {
  constructor(private store: Store<State>) {
    this.store.dispatch(new PlayAction({ title: "Test song" }));
  }
}
