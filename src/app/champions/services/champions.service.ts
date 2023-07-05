import {
  Injectable,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UseQuery } from '@ngneat/query';

import { environment } from 'src/environments/environments';
import { ChampionsResponse, Champion } from '../interfaces/champion.interface';
import { ChampionResponse } from '../interfaces';
import { ChampionsStore } from '../store/champions.store';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);
  private championsStore = inject(ChampionsStore);

  private readonly baseUrl: string = environment.apiUrl;

  constructor() {}

  getChampions() {
    return this.useQuery(['champions'], () =>
      this.http.get<ChampionsResponse>(
        `${
          this.baseUrl
        }/cdn/${this.championsStore.version()}/data/${this.championsStore.language()}/champion.json`
      )
    ).result$;
  }

  getChampion(champion: string) {
    return this.useQuery(['championDetails'], () =>
      this.http.get<ChampionResponse>(
        `${
          this.baseUrl
        }/cdn/${this.championsStore.version()}/data/${this.championsStore.language()}/champion/${champion}.json`
      )
    ).result$;
  }

  getLanguages() {
    return this.useQuery<string[]>(['languages'], () =>
      this.http.get<string[]>(`${this.baseUrl}/cdn/languages.json`)
    ).result$;
  }

  getVersions() {
    return this.useQuery<string[]>(['versions'], () =>
      this.http.get<string[]>(`${this.baseUrl}/api/versions.json`)
    ).result$;
  }

  setChampions(champions: Champion[]) {
    this.championsStore.setChampions(champions);
  }

  setLanguages(languages: string[]) {
    this.championsStore.setLanguages(languages);
  }

  setVersions(versions: string[]) {
    this.championsStore.setVersions(versions);
  }

  setLanguage(lang: string) {
    this.championsStore.setLanguage(lang);
    this.fetchData();
  }

  setVersion(version: string) {
    this.championsStore.setVersion(version);
    this.fetchData();
  }

  fetchData(isLoading?: WritableSignal<boolean>) {
    this.getChampions().subscribe((response) => {
      if (!response.isError && response.data) {
        if (isLoading) isLoading.set(response.isLoading);
        const champions = [];
        const object = response.data.data;
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            champions.push(object[key]);
          }
        }
        this.championsStore.setChampions(champions);
      }
    });
  }
}
