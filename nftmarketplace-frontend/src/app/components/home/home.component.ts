import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/models/category';
import { NFT } from 'src/app/models/nft';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  collections: any;
  categories: any = [];
  nfts: any;
  nftsInCollection: { [key: string]: any[]; } = { "": [] };
  notEmptyCategories: Array<Category> = [];

  // Slider
  slider: any;
  defaultTransform: any;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService, private nftService: NftService, private httpClient: HttpClient) { }

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
        this.getNftsByCollectionName(collection.name);
      }
    })
  }

  getNfs() {
    this.nftService.getNfts().subscribe(reponse => {
      this.nfts = reponse;
    })
  }

  getNftsByCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(collectionName).subscribe(reponse => {
      this.nftsInCollection[collectionName] = reponse;
    })
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
