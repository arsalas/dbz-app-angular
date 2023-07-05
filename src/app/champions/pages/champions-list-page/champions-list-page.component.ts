import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { ChampionsService } from 'src/app/champions/services/champions.service';
import { ChampionsStore } from '../../store/champions.store';
import { Champion } from '../../interfaces';

@Component({
  selector: 'lol-champions-list-page',
  templateUrl: './champions-list-page.component.html',
  styleUrls: ['./champions-list-page.component.scss'],
})
export class ChampionsListPageComponent implements OnInit {
  private championsService = inject(ChampionsService);
  private championsStore = inject(ChampionsStore);
  private _isLoading = signal<boolean>(true);

  champions = computed<Champion[]>(() =>
    this.championsStore
      .champions()
      .filter((champ) =>
        champ.name
          .toLowerCase()
          .includes(this.championsStore.filter().toLowerCase())
      )
  );

  public isLoading = computed(() => this._isLoading());

  ngOnInit(): void {
    this.championsService.fetchData(this._isLoading);
  }
}
