import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ChampionsService } from 'src/app/champions/services/champions.service';
import { ChampionsStore } from 'src/app/champions/store/champions.store';

@Component({
  selector: 'lol-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private championsService = inject(ChampionsService);
  private championsStore = inject(ChampionsStore);

  public languages = computed(() => this.championsStore.languages());
  public versions = computed(() => this.championsStore.versions());
  public language = computed(() => this.championsStore.language());
  public version = computed(() => this.championsStore.version());

  public langSelect = this.championsStore.language();
  public versSelect = this.championsStore.version();
  public nameFilter = '';

  ngOnInit(): void {}

  onInput() {
    this.championsStore.filter.set(this.nameFilter);
  }

  onChangeLanguage() {
    this.championsService.setLanguage(this.langSelect);
  }

  onChangeVersion() {
    this.championsService.setVersion(this.versSelect);
  }
}
