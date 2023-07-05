import { Injectable, computed, signal } from '@angular/core';
import { Champion } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChampionsStore {
  private _languages = signal<string[]>([]);
  private _versions = signal<string[]>([]);
  private _language = signal<string>('es_ES');
  private _version = signal<string>('13.13.1');
  private _champions = signal<Champion[]>([]);

  public filter = signal<string>('');
  public languages = computed(() => this._languages());
  public versions = computed(() => this._versions());
  public language = computed(() => this._language());
  public version = computed(() => this._version());
  public champions = computed(() => this._champions());

  constructor() {}

  setChampions(champions: Champion[]) {
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
}
