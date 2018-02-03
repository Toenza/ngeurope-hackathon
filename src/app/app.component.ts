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

  constructor(private getAccessTokenService: GetAccessTokenService) {
  }

  public ngOnInit(): void {
    if (!this.getAccessTokenService.accessToken) {
      this.getAccessTokenService.login();
    }
  }
}
