import { LOAD_ALBUMS, LoadAlbums } from './state/actions/album.actions';
import { State } from './state/reducers/index';
import { Store } from '@ngrx/store';
import { GetAccessTokenService } from './get-access-token.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  accessToken: string;

  constructor(private getAccessTokenService: GetAccessTokenService, private store: Store<State>) {
  }

  public ngOnInit(): void {
    const token = this.getAccessTokenService.fetchAccessToken();
    if (!token) {
      this.getAccessTokenService.login();
    } else {
      this.store.dispatch(new LoadAlbums());
    }
  }
}
