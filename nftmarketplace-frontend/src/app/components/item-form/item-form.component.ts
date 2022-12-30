import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CollectionService } from 'src/app/services/collection.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  collections: any;

  Nft: NFT = {
    name: '',
    image: '',
    price: 0,
    collectionName: ''
  }

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private collectionService: CollectionService, private nftService: NftService, private router: Router) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections() {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
    })
  }

  persistNft() {
    this.nftService.persistNft(this.Nft).subscribe(() => {
      this.router.navigate(['item', this.Nft.name]);
      this.resetNft();
    })
  }

  resetNft() {
    this.Nft = {
      name: '',
      image: '',
      price: 0,
      collectionName: ''
    }
  }

}
