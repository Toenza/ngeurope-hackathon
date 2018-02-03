import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: AlbumComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AlbumComponent
  ]
})
export class AlbumModule { }
