import { Component, OnInit } from "@angular/core";
import { State, getAlbums } from "../state/reducers";
import { Store } from "@ngrx/store";
import { Album } from "../models/album.model";
import { Observable } from "rxjs/Observable";
import { LoadAlbums } from "../state/actions";

@Component({
  selector: "app-album",
  template: `<p> Album page</p>
  <ul *ngFor="let album of albums$ | async">
    <li ><a [routerLink]="['/album', album.id]">{{ album.title }}</a></li>
  </ul>
  `
})
export class AlbumComponent implements OnInit {
  public albums$: Observable<Album[]>;

  constructor(private store: Store<State>) {}
  ngOnInit() {
    this.store.dispatch(new LoadAlbums());
    this.albums$ = this.store.select(getAlbums);
  }
}
