import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { ChampionsService } from './champions/services/champions.service';
import { switchMap, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private championsService = inject(ChampionsService);

  title = 'lol-app';

  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    const requests$ = zip(
      this.championsService.getLanguages(),
      this.championsService.getVersions()
    );
    requests$.subscribe(([respLanguages, respVersions]) => {
      if (respLanguages.isFetched && respLanguages.isFetched) {
        this.championsService.setLanguages(respLanguages.data!);
        this.championsService.setVersions(respVersions.data!);
        this.isLoading.set(false);
      }
    });
  }
}
