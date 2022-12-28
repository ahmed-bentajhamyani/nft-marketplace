import { Component } from '@angular/core';
import { faGlobe, faEllipsis, faShareNodes, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  nfts: any;

  // Icons
  faGlobe = faGlobe; 
  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faEllipsis = faEllipsis;
  faShareNodes = faShareNodes;
  faFlag = faFlag;

  constructor(private nftService: NftService) {}

  ngOnInit(): void {
    this.getNfts();
  }
  getNfts() {
    this.nftService.getNFTs().subscribe(reponse => {
      this.nfts = reponse;
    })
  }
}
