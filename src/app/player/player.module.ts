import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerComponent } from "./player.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [CommonModule],
  declarations: [PlayerComponent],
  exports: [PlayerComponent]
})
export class PlayerModule {}
