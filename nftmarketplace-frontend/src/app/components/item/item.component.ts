import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faFlag, faGlobe, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { CollectionService } from 'src/app/services/collection.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  nft: any;
  nfts: any;
  collection: any;

  // Icons
  faShareNodes = faShareNodes;
  faEllipsis = faEllipsis;
  faEthereum = faEthereum;
  faGlobe = faGlobe;
  faFlag = faFlag;

  constructor(private route: ActivatedRoute, private nftService: NftService, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getNftByName(params['name']);
      }
    })
  }

  getNftByName(name: any) {
    this.nftService.getNftByName(name).subscribe(response => {
      this.nft = response;
      this.collectionService.getCollectionByName(this.nft.collectionName).subscribe(collection => {
        this.collection = collection;
        this.getNftsByName(this.nft.collectionName);
      })
    })
  }

  getNftsByName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(response => {
      this.nfts = response;
      this.nfts = this.nfts.filter((nft: any) => nft.id !== this.nft.id);
    })
  }

  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }

}
