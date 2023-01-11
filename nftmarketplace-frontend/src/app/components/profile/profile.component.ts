import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faFlag, faGear, faShareNodes, faUser } from '@fortawesome/free-solid-svg-icons';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  collections: any;
  nfts: { [key: string]: any } = { "": "" };
  user: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedProfilePicture: any;
  retrievedNftImages: { [key: string]: any } = { "": "" };

  // Icons
  faShareNodes = faShareNodes;
  faEllipsis = faEllipsis;
  faEthereum = faEthereum;
  faGear = faGear;
  faFlag = faFlag;
  faUser = faUser;

  constructor(private collectionService: CollectionService, private userService: UserService, private imageService: ImageService, private nftService: NftService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['hash']) {
        this.getUserByHash(params['hash']);
      }
    })
  }

  getUserByHash(hash: any) {
    this.userService.getUserByHash(hash).subscribe(response => {
      this.user = response;
      if (this.user.profilePicture != '') {
        this.getProfilePicture(this.user.profilePicture);
      }
      this.getCollectionsByUserHash();
    });
  }

  getProfilePicture(imageName: any) {
    this.imageService.getImage(imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedProfilePicture = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getCollectionsByUserHash() {
    this.collectionService.getCollectionsByUserHash(this.user.hash).subscribe(reponse => {
      this.collections = reponse;
      for (let collection of this.collections) {
        this.getNftsByCollectionName(collection.name);
      }
    })
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nfts[collectionName] = reponse;
      for (let nft of this.nfts[collectionName]) {
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

  truncate(fullStr: string, strLen: number, separator: any) {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow / 2),
      backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
      separator +
      fullStr.substr(fullStr.length - backChars);
  };
}
