import { Component, Input } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input()
  nft!: NFT;

  @Input()
  retrievedImage: any;

  // Icons
  faImage = faImage;

  constructor() { }
}
