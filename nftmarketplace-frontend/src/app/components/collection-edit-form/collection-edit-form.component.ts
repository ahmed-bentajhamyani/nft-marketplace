import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-collection-edit-form',
  templateUrl: './collection-edit-form.component.html',
  styleUrls: ['./collection-edit-form.component.css']
})
export class CollectionEditFormComponent {
  categories: any;

  Collection: Collection = {
    name: '',
    description: '',
    items: 0,
    website: '',
    discord: '',
    twitter: '',
    createdAt: new Date(),
    categoryName: '',
    walletAddress: '',
    imageName: ''
  }

  // To update the nft collection name
  oldCollectionName: any;

  selectedFile: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;

  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;
  faClose = faClose;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCategories();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getCollectionByName(params['name']);
      }
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(reponse => {
      this.categories = reponse;
    })
  }

  getCollectionByName(name: any) {
    this.collectionService.getCollectionByName(name).subscribe(response => {
      this.Collection = response;
      this.getImage(this.Collection.imageName);
      this.oldCollectionName = this.Collection.name;
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

  updateCollection() {
    this.collectionService.updateCollection(this.Collection).subscribe(() => {
      this.updateNftCollectionName(this.Collection.name);
      this.onUpload();
    })
  }

  updateNftCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(this.oldCollectionName).subscribe((response) => {
      response.map((nft) => {
        nft.collectionName = collectionName;
        this.nftService.updateNft(nft).subscribe(() => {
          this.resetCollection();
        });
      })
    })
  }

  deleteCollection() {
    
    this.collectionService.deleteCollection(this.Collection.id).subscribe(() => {
      this.imageService.deleteImage(this.retrieveResponse.id).subscribe(() => {
        this.router.navigate(['']);
      });
    })
  }

  resetCollection() {
    this.Collection = {
      name: '',
      description: '',
      items: 0,
      website: '',
      discord: '',
      twitter: '',
      createdAt: new Date(),
      categoryName: '',
      walletAddress: '',
      imageName: ''
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.Collection.imageName = this.selectedFile.name;
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
      this.router.navigate(['collection', this.Collection.name]);
    });
  }

  deleteImage() {
    this.imagePreviewUrl = null;
  }
}
