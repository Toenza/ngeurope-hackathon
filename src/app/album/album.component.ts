import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { State, getAlbums } from "../state/reducers";
import { Store } from "@ngrx/store";
import { Album } from "../models/album.model";
import { Observable } from "rxjs/Observable";
import { LoadAlbums } from "../state/actions";

@Component({
  selector: "app-album",
  template: `<p> Album page</p>
  <ng-container *ngFor="let album of albums$ | async">
    <app-album-detail [album]="album"></app-album-detail>
  </ng-container>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AlbumComponent implements OnInit {
  public albums$: Observable<Album[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadAlbums());
    this.albums$ = this.store.select(getAlbums);
  }
}
