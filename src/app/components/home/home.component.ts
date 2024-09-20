import { Component } from '@angular/core';
import { Game } from '../../types/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameList: Game = [
    {
      gameCover: 'assets/cod-cw.jpg',
      gameLabel: 'Call of Dury Cold War',
      gameType: 'First Person Shooter',
      gamePrice: '59.99',
      gameAvailabity: 'Available',
    },
    {
      gameCover: 'assets/cod-bo3.jpg',
      gameLabel: 'Call of Duty Black Ops 3',
      gameType: 'First Person Shooter',
      gamePrice: '59.99',
      gameAvailabity: 'Available',
    },
    {
      gameCover: 'assets/cod-iw.jpg',
      gameLabel: 'Call of Duty Infinite Warfare',
      gameType: 'First Person Shooter',
      gamePrice: '59.99',
      gameAvailabity: 'Available',
    },
    {
      gameCover: 'assets/cod-bo4.jpg',
      gameLabel: 'Call of Duty Black Ops 4',
      gameType: 'First Person Shooter',
      gamePrice: '59.99',
      gameAvailabity: 'Discontinued',
    },
  ];
}
