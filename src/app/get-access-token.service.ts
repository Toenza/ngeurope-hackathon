import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetAccessTokenService {

  public accessToken: string;

  constructor(private httpClient: HttpClient) { }

  public fetchAccessToken(): string {
    if (this.accessToken) {
      return this.accessToken;
    }
    const params = this.getHashParams();
    const accessToken = params.access_token;
    if (accessToken) {
      // push token to store
      this.accessToken = accessToken;
      return this.accessToken;
    }
  }

  public getHashParams(): any {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  public login(): void {
    const client_id = '0959d3509ac145c9a306da984d3a5607';
    const redirect_uri = 'http://localhost:4200';
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    console.log('redirecting to ' + url);
    window.location.href = url;
  }

  public getUserRecommendations(accessToken: string): void {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);

    this.httpClient.get<any>('https://api.spotify.com/v1/me',
      {
        headers
      }).subscribe(
      data => {
        console.log(data);
      }
      );
  }

}
