import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.css']
})
export class ProfileEditFormComponent {
  collections: any;

  User: User = {
    username: 'Unnamed',
    email: 'unnamed@gmail.com',
    profilePicture: '',
    hash: '',
    joinedAt: new Date()
  }

  selectedFile: any;

  retrieveResponse: any;
  base64Data: any;
  retrievedImage: any;

  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;
  faClose = faClose;

  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private UserService: UserService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getCollections();
    this.route.params.subscribe(params => {
      if (params['name']) {
        this.getUserByHash(params['name']);
      }
    })
  }

  getCollections() {
    this.collectionService.getCollections().subscribe((response) => {
      this.collections = response;
    })
  }

  getUserByHash(name: any) {
    this.UserService.getUserByHash(name).subscribe((response: any) => {
      this.User = response;
      this.getImage(this.User.profilePicture);
    })
  }

  getImage(profilPicture: any) {
    this.imageService.getImage(profilPicture).subscribe(response => {
      this.retrieveResponse = response;
      console.log(this.retrieveResponse);
      this.base64Data = this.retrieveResponse.picByte;
      this.imagePreviewUrl = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  updateUser() {
    this.UserService.updateUser(this.User).subscribe(() => {
      this.onUpload();
      this.router.navigate(['user', this.User.id]);
      this.resetUser();
    })
  }

  deleteUser() {
    this.UserService.deleteUser(this.User.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  resetUser() {
    this.User = {
      username: 'Unnamed',
      email: 'unnamed@gmail.com',
      profilePicture: '',
      hash: '',
      joinedAt: new Date()
    }
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    this.readImage(this.selectedFile);
    this.User.profilePicture = this.selectedFile.name;
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

    this.imageService.uploadImage(uploadImageData).subscribe(() => { });
  }

  deleteImage() {
    this.imagePreviewUrl = null;
  }
}
