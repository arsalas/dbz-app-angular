import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';

@NgModule({
  declarations: [ChampionCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [ChampionCardComponent],
})
export class ChampionsModule {}
