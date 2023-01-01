import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';
import { Image } from 'src/app/models/image';
import { CategoryService } from 'src/app/services/category.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';

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
    items: 0,
    website: '',
    discord: '',
    twitter: '',
    createdAt: new Date(),
    categoryName: '',
    username: '',
    imageName: ''
  }

  Image: Image = {
    name: '',
    type: '',
    picByte: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;

  constructor(private categoryService: CategoryService, private collectionService: CollectionService, private imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.imagePreviewUrl = null;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    })
  }

  persistCollection() {
    this.collectionService.persistCollection(this.Collection).subscribe(() => {
      this.onUpload();
      this.router.navigate(['collection', this.Collection.name]);
      this.resetCollection();
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
      username: '',
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
    uploadImageData.append("imageFile", this.selectedFile, this.selectedFile.name);

    console.log(uploadImageData.get("imageFile"));
    this.imageService.uploadImage(uploadImageData);
  }

}
