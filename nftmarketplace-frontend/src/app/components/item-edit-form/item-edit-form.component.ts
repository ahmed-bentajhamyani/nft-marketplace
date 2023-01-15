import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
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
    price: 0,
    collectionName: '',
    imageName: '',
    token: ''
  }

  selectedFile: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;

  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;
  faClose = faClose;

  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) { }

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
      this.getImage(this.Nft.imageName);
    })
  }

  getImage(imageName: any) {
    this.imageService.getImage(imageName).subscribe(response => {
      this.retrieveResponse = response;
      console.log(this.retrieveResponse);
      this.base64Data = this.retrieveResponse.picByte;
      this.imagePreviewUrl = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  updateNft() {
    this.nftService.updateNft(this.Nft).subscribe(() => {
      this.onUpload();
    })
  }

  deleteNft() {
    this.nftService.deleteNft(this.Nft.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  resetNft() {
    this.Nft = {
      name: '',
      price: 0,
      collectionName: '',
      imageName: '',
      token: ''
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.Nft.imageName = this.selectedFile.name;
  }

  readImage(selectedImage: any) {
    if (selectedImage) {
      var reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = (event) => {
        if (event.target)
          this.imagePreviewUrl = event.target.result;
      };
    }
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.imageService.uploadImage(uploadImageData).subscribe(() => {
      this.router.navigate(['item', this.Nft.name]);
      this.resetNft();
    });
  }

  deleteImage() {
    this.imagePreviewUrl = null;
  }
}
