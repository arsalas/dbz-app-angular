import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionDetails } from 'src/app/champions/interfaces';
import { ChampionsService } from 'src/app/champions/services/champions.service';

@Component({
  selector: 'app-champion-details-page',
  templateUrl: './champion-details-page.component.html',
  styleUrls: ['./champion-details-page.component.scss'],
})
export class ChampionDetailsPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private championsService = inject(ChampionsService);

  champion?: ChampionDetails;
  id?: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.championsService.getChampion(this.id!).subscribe((res) => {
        if (res.isFetched) {
          this.champion = res.data?.data[this.id!]
        }
      });
    });
  }
}
