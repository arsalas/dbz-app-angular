import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsModule } from '../champions/champions.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChampionDetailsPageComponent } from './pages/champion-details-page/champion-details-page.component';

@NgModule({
  declarations: [HomePageComponent, ChampionDetailsPageComponent],
  imports: [CommonModule, ChampionsModule, SharedModule, HomeRoutingModule],
})
export class HomeModule {}
