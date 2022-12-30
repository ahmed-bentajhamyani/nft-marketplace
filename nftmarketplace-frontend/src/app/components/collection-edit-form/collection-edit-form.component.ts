import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
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
    image: '',
    items: 0,
    website: '',
    discord: '',
    twitter: '',
    createdAt: new Date(),
    categoryName: '',
    username: ''
  }

  oldCollectionName: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private collectionService: CollectionService, private nftService: NftService) { }

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
      this.oldCollectionName = this.Collection.name;
    })
  }

  updateCollection() {
    this.collectionService.updateCollection(this.Collection).subscribe(() => {
      this.updateNftCollectionName(this.Collection.name);
      this.router.navigate(['collection', this.Collection.name]);
      this.resetCollection();
    })
  }

  updateNftCollectionName(collectionName: any) {
    this.nftService.getNftsByCollectionName(this.oldCollectionName).subscribe((response) => {
      response.map((nft) => {
        nft.collectionName = collectionName;
        this.nftService.updateNft(nft).subscribe(() => { })
      })
    })
  }

  resetCollection() {
    this.Collection = {
      name: '',
      description: '',
      image: '',
      items: 0,
      website: '',
      discord: '',
      twitter: '',
      createdAt: new Date(),
      categoryName: '',
      username: ''
    }
  }

  deleteCollection() {
    this.collectionService.deleteCollection(this.Collection.id).subscribe(() => { })
  }

}
