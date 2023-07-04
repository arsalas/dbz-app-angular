import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';
import { ChampionDetailsPageComponent } from './pages/champion-details-page/champion-details-page.component';
import { ChampionsListPageComponent } from './pages/champions-list-page/champions-list-page.component';

@NgModule({
  declarations: [
    ChampionCardComponent,
    ChampionDetailsPageComponent,
    ChampionsListPageComponent,
  ],
  imports: [CommonModule, SharedModule, ChampionsRoutingModule],
  exports: [ChampionCardComponent],
})
export class ChampionsModule {}
