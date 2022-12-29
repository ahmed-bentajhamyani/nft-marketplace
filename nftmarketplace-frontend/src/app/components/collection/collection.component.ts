import { Component } from '@angular/core';
import { faGlobe, faEllipsis, faShareNodes, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NftService } from 'src/app/services/nft.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  collection: any;
  nfts: any;

  // Icons
  faGlobe = faGlobe;
  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faEllipsis = faEllipsis;
  faShareNodes = faShareNodes;
  faFlag = faFlag;

  constructor(private collectionService:CollectionService, private nftService: NftService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getCollectionByName(params['name']);
      }
    })
  }

  getCollectionByName(name: any) {
    this.collectionService.getCollectionByName(name).subscribe(reponse => {
      this.collection = reponse;
      this.getNftsByCollectionName(this.collection.name);
    })
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      console.log(reponse)
      this.nfts = reponse;
    })
  }

  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }
}
