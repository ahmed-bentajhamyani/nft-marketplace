import { Component, Input } from '@angular/core';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';

@Component({
  selector: 'app-more-items-card',
  templateUrl: './more-items-card.component.html',
  styleUrls: ['./more-items-card.component.css']
})
export class MoreItemsCardComponent {
  // Icons
  faGrip = faGrip;

  @Input()
  nfts!: NFT[];

  @Input()
  retrievedImages: any;
}
