import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() gameLabel: string = "";
  @Input() gameCover: string = "";
  @Input() gameType: string = "";
  @Input() gameprice: string = "";
  @Input() gameAvailabity: string = "";
}
