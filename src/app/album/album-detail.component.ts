import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../state/reducers";
import { Album } from "../models/album.model";

@Component({
  selector: "app-album-detail",
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumDetailComponent implements OnInit {
  @Input() album: Album;

  collapsed = true;
  constructor(private store: Store<State>) { }

  ngOnInit() { }

  navigateTo(album: Album) {

  }
}

// import { Component, OnInit } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { State, getAlbums } from "../state/reducers";
// import { Album } from "../models/album.model";
// import { Observable } from "rxjs/Observable";
// import { getSelectedAlbum } from "../state/reducers";
// import { Router } from "@angular/router";
// import { ActivatedRoute } from "@angular/router";
// import { map } from "rxjs/operators/map";
// import { tap } from "rxjs/operators/tap";
// import { exhaustMap } from "rxjs/operators/exhaustMap";
// import { switchMap } from "rxjs/operators/switchMap";
// import { LoadAlbums, SelectAlbum } from "../state/actions";

// @Component({
//   selector: "app-album-detail",
//   template: `Album detail ! <div *ngIf="album$ | async as album"><span>{{ album.description}}</span><span> {{ album.title}}</span>
//   <ul>
//   <li *ngFor="let track of album.tracklist"> {{ track.title }}</li>
//   </ul>
//   </div>`
// })
// export class AlbumDetailComponent implements OnInit {
//   public album$: Observable<Album>;
//   constructor(private store: Store<State>, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.album$ = this.route.paramMap.pipe(
//       map(params => params.get("id")),
//       switchMap(albumid =>
//         this.store
//           .select(getAlbums)
//           .pipe(map(albums => albums.find(a => a.id === albumid)))
//       ),
//       tap(album => this.store.dispatch(new SelectAlbum(album)))
//     );
//     this.store.dispatch(new LoadAlbums());
//   }
// }
