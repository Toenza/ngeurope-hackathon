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
