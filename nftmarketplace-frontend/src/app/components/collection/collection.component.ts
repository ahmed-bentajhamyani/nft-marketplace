import { Component } from '@angular/core';
import { faGlobe, faEllipsis, faShareNodes, faFlag, faPenToSquare, faImage } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NftService } from 'src/app/services/nft.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  collection: any;
  nfts: any;
  owner: any;
  user: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImage: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };

  // Icons
  faGlobe = faGlobe;
  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faEllipsis = faEllipsis;
  faShareNodes = faShareNodes;
  faFlag = faFlag;
  faPenToSquare = faPenToSquare;
  faImage = faImage;

  constructor(private collectionService: CollectionService, private nftService: NftService, private userService: UserService, private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getCollectionByName(params['name']);
      }
    });
    if (sessionStorage.getItem('user')) {
      this.user = sessionStorage.getItem('user');
      this.user = JSON.parse(this.user);
    }
  }

  getCollectionByName(name: any) {
    this.collectionService.getCollectionByName(name).subscribe(reponse => {
      this.collection = reponse;
      this.getOwnerByWalletAddress();
      this.getCollectionImage(this.collection.imageName);
      this.getNftsByCollectionName(this.collection.name);
    })
  }

  getCollectionImage(imageName: any) {
    this.imageService.getImage(imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedCollectionImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nfts = reponse;
      for (let nft of this.nfts) {
        this.getNftImage(nft);
      }
    })
  }

  getNftImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedNftImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getOwnerByWalletAddress() {
    this.userService.getUserByWalletAddress(this.collection.walletAddress).subscribe(response => {
      this.owner = response;
    })
  }

  // Redirect to an external URL
  goTo(url: any) {
    window.location.href = url;
  }
}
