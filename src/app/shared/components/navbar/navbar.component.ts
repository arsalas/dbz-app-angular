import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ChampionsService } from 'src/app/champions/services/champions.service';

@Component({
  selector: 'lol-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private championsService = inject(ChampionsService);

  public languages = computed(() => this.championsService.languages());
  public versions = computed(() => this.championsService.versions());
  public language = computed(() => this.championsService.language());
  public version = computed(() => this.championsService.version());

  public langSelect = this.championsService.language();
  public versSelect = this.championsService.version();

  ngOnInit(): void {}

  onChangeLanguage() {
    this.championsService.setLanguage(this.langSelect);
    this.championsService.fetchData();
  }

  onChangeVersion() {
    this.championsService.setVersion(this.versSelect);
    this.championsService.fetchData();
  }
}
