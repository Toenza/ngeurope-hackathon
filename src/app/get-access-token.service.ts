import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetAccessTokenService {

  public accessToken: string;

  constructor(private httpClient: HttpClient) {
    this.accessToken = localStorage.getItem('access-token') || null;
    this.accessToken = this.accessToken === 'undefined' ? null : this.accessToken;
  }

  public fetchAccessToken(): string {
    if (this.accessToken) {
      return this.accessToken;
    }
    const params = this.getHashParams();
    const accessToken = params.access_token === 'undefined' ? null : params.access_token;
    localStorage.setItem('access-token', accessToken);
    if (accessToken) {
      // push token to store
      this.accessToken = accessToken;
      return this.accessToken;
    }
  }

  public getHashParams(): any {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  public login(): void {
    const client_id = '0959d3509ac145c9a306da984d3a5607';
    const redirect_uri = 'http://127.0.0.1:8080';
    let url = 'https://accounts.spotify.com/authorize';
    url += '?scope=user-library-read&response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    window.location.href = url;
  }

  public getUserRecommendations(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);

    return this.httpClient.get<any>('https://api.spotify.com/v1/me/albums',
      {
        headers
      });
  }

}
