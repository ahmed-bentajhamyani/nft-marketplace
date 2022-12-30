import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CollectionService } from 'src/app/services/collection.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-item-edit-form',
  templateUrl: './item-edit-form.component.html',
  styleUrls: ['./item-edit-form.component.css']
})
export class ItemEditFormComponent {
  collections: any;

  Nft: NFT = {
    name: '',
    image: '',
    price: 0,
    collectionName: ''
  }

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private nftService: NftService) { }

  ngOnInit(): void {
    this.getCollections();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getNftByName(params['name']);
      }
    })
  }

  getCollections() {
    this.collectionService.getCollections().subscribe((response) => {
      this.collections = response;
    })
  }

  getNftByName(name: any) {
    this.nftService.getNftByName(name).subscribe(response => {
      this.Nft = response;
    })
  }

  updateNft() {
    this.nftService.updateNft(this.Nft).subscribe(() => {
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

  deleteNft() {
    this.nftService.deleteNft(this.Nft.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
