import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight, faImage } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  collections: any;
  categories: any = [];
  nftsInCollection: { [key: string]: any[]; } = { "": [] };
  floorPrice: { [key: string]: any[]; } = { "": [] };
  notEmptyCategories: Array<Category> = [];

  retrieveResponse: any;
  base64Data: any;
  retrievedCollectionImages: { [key: string]: any } = { "": "" };
  retrievedNftImages: { [key: string]: any } = { "": "" };

  // Slider
  slider: any;
  defaultTransform: any;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // Icons
  faImage = faImage;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCollections();

    // Slider
    this.defaultTransform = 0;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(reponse => {
      this.categories = reponse;
      for (let category of this.categories) {
        for (let collection of this.collections) {
          if (collection.categoryName == category.name) {
            this.notEmptyCategories.push(category);
            break;
          }
        }
      }
    })
  }

  getCollections() {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
      this.getCategories();
      for (let collection of this.collections) {
        this.getCollectionImage(collection);
        this.getNftsByCollectionName(collection.name);
      }
    })
  }

  getCollectionImage(collection: any) {
    this.imageService.getImage(collection.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedCollectionImages[collection.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nftsInCollection[collectionName] = reponse;
      this.floorPrice[collectionName] = this.nftsInCollection[collectionName][0].price;
      for (let nft of this.nftsInCollection[collectionName]) {
        this.getNftImage(nft);

        // Calcul the floor price
        if(nft.price < this.floorPrice[collectionName]) {
          this.floorPrice[collectionName] = nft.price;
        }
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

  // Slider
  goNext(slider: string) {
    this.slider = document.getElementById(slider);
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  goPrev(slider: string) {
    this.slider = document.getElementById(slider);
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

}
