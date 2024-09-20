import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss',
})
export class CardPricingComponent {
  @Input() gameType: string = '';
  @Input() gameprice: string = '';
  @Input() gameAvailabity: string = '';
}
