import { MatIconModule, MatExpansionModule, MatListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route } from "@angular/router";
import { AlbumComponent } from "./album.component";
import { RouterModule } from "@angular/router";
import { AlbumDetailComponent } from "./album-detail.component";

const routes: Route[] = [
  { path: "", component: AlbumComponent },
  { path: ":id", component: AlbumDetailComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule, MatListModule],
  declarations: [AlbumComponent, AlbumDetailComponent]
})
export class AlbumModule { }
