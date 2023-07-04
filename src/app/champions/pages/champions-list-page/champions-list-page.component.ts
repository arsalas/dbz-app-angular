import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { ChampionsService } from 'src/app/champions/services/champions.service';

@Component({
  selector: 'lol-champions-list-page',
  templateUrl: './champions-list-page.component.html',
  styleUrls: ['./champions-list-page.component.scss'],
})
export class ChampionsListPageComponent implements OnInit {
  private championsService = inject(ChampionsService);

  private _isLoading = signal<boolean>(true);
  public champions = computed(() => this.championsService.champions());

  public isLoading = computed(() => this._isLoading());

  ngOnInit(): void {
    this.championsService.fetchData(this._isLoading);
  }
}
