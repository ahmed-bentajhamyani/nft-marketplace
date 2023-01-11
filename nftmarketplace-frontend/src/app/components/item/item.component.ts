import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faFlag, faGlobe, faImage, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  nft: any;
  nfts: any;
  collection: any;
  user: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedImages: { [key: string]: any } = { "": "" };

  // Icons
  faShareNodes = faShareNodes;
  faEllipsis = faEllipsis;
  faEthereum = faEthereum;
  faGlobe = faGlobe;
  faFlag = faFlag;
  faImage = faImage;

  constructor(private route: ActivatedRoute, private nftService: NftService, private collectionService: CollectionService, private userService: UserService, private imageService: ImageService) { }

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
      this.getImage(this.nft);
      this.collectionService.getCollectionByName(this.nft.collectionName).subscribe(collection => {
        this.collection = collection;
        this.getUserByHash();
        this.getNftsByName(this.nft.collectionName);
      })
    })
  }

  getNftsByName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(response => {
      this.nfts = response;
      this.nfts = this.nfts.filter((nft: any) => nft.id !== this.nft.id);
      for (let nft of this.nfts) {
        this.getImage(nft);
      }
    })
  }

  getImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getUserByHash() {
    this.userService.getUserByHash(this.collection.userHash).subscribe(response => {
      this.user = response;
      console.log(this.user);
    })
  }

  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }

}
