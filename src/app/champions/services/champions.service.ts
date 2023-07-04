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
import { ChampionsResponse, Champions } from '../interfaces/champion.interface';
import { ChampionResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);

  private readonly baseUrl: string = environment.apiUrl;

  private _languages = signal<string[]>([]);
  private _versions = signal<string[]>([]);
  private _language = signal<string>('es_ES');
  private _version = signal<string>('13.13.1');
  private _champions = signal<Champions | undefined>(undefined);

  public languages = computed(() => this._languages());
  public versions = computed(() => this._versions());
  public language = computed(() => this._language());
  public version = computed(() => this._version());
  public champions = computed(() => this._champions());

  constructor() {}

  getChampions() {
    return this.useQuery(['champions'], () =>
      this.http.get<ChampionsResponse>(
        `${
          this.baseUrl
        }/cdn/${this.version()}/data/${this.language()}/champion.json`
      )
    ).result$;
  }

  getChampion(champion: string) {
    return this.useQuery(['championDetails'], () =>
      this.http.get<ChampionResponse>(
        `${
          this.baseUrl
        }/cdn/${this.version()}/data/${this.language()}/champion/${champion}.json`
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

  setChampions(champions: Champions) {
    this._champions.set(champions);
  }

  setLanguages(languages: string[]) {
    this._languages.set(languages);
  }

  setVersions(versions: string[]) {
    this._versions.set(versions);
    if (this._versions().length > 0) {
      this._version.set(this._versions()[0]);
    }
  }

  setLanguage(lang: string) {
    this._language.set(lang);
  }

  setVersion(version: string) {
    this._version.set(version);
  }

  fetchData(isLoading?: WritableSignal<boolean>) {
    this.getChampions().subscribe((response) => {
      if (!response.isError && response.data) {
        if (isLoading) isLoading.set(response.isLoading);
        this.setChampions(response.data.data);
      }
    });
  }
}
