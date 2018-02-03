import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerComponent } from "./player.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MatProgressBarModule, MatCardModule, MatIconModule, MatButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule { }
