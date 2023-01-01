import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
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
    price: 0,
    collectionName: '',
    imageName: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService, private router: Router) { }

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
      this.onUpload();
      this.router.navigate(['item', this.Nft.name]);
      this.resetNft();
    })
  }

  resetNft() {
    this.Nft = {
      name: '',
      price: 0,
      collectionName: '',
      imageName: ''
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

    this.imageService.uploadImage(uploadImageData);
  }

}
