import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../state/reducers";

@Component({
  selector: "app-album-detail",
  template: `Album detail !`
})
export class AlbumDetailComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}
}
