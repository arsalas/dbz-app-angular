import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionsListPageComponent } from './pages/champions-list-page/champions-list-page.component';
import { ChampionDetailsPageComponent } from './pages/champion-details-page/champion-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionsListPageComponent,
  },
  {
    path: ':id',
    component: ChampionDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionsRoutingModule {}
