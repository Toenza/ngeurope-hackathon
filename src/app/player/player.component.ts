import { PlayerState } from './../state/reducers/player.reducer';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { State } from "../state/reducers";
import { Store } from "@ngrx/store";
import { PlayAction } from "../state/actions";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {
  player$: Observable<PlayerState>;

  constructor(private store: Store<State>) {
    this.store.dispatch(new PlayAction({ title: "Test song", duration: 204}));
  }

  ngOnInit(): void {
    this.player$ = this.store.select((state) => state.player);
  }
}
