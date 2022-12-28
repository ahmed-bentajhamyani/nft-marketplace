import { Component, Input } from '@angular/core';
import { NFT } from 'src/app/models/nft';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input()
  nft!: NFT;

  constructor() {}
}
