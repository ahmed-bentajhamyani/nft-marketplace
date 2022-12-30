import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent {
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

  selectedFile: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }

  persistCollection() {
    this.collectionService.persistCollection(this.Collection).subscribe(() => {
      this.router.navigate(['collection', this.Collection.name]);
      this.resetCollection();
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
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

}
