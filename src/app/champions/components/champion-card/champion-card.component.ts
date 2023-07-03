import { Component, Input } from '@angular/core';
import { Champion } from '../../interfaces';

@Component({
  selector: 'lol-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss'],
})
export class ChampionCardComponent {
  @Input() champion?: Champion;

}
