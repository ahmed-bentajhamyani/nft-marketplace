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
  previousImage: any;

  User: User = {
    username: 'Unnamed',
    email: 'unnamed@gmail.com',
    profilePicture: '',
    walletAddress: '',
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

  constructor(private route: ActivatedRoute, private router: Router, private collectionService: CollectionService, private userService: UserService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['walletAddress']) {
        this.getUserByWalletAddress(params['walletAddress']);
      }
    })
  }

  getUserByWalletAddress(walletAddress: any) {
    this.userService.getUserByWalletAddress(walletAddress).subscribe(response => {
      this.User = response;
      this.previousImage = this.User.profilePicture;
      this.getImage(this.User.profilePicture);
    })
  }

  getImage(profilPicture: any) {
    this.imageService.getImage(profilPicture).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.imagePreviewUrl = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  updateUser() {
    this.userService.updateUser(this.User).subscribe(() => {
      this.onUpload();
      this.router.navigate(['account', this.User.walletAddress]);
      this.resetUser();
    })
  }

  deleteUser() {
    this.userService.deleteUser(this.User.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  resetUser() {
    this.User = {
      username: 'Unnamed',
      email: 'unnamed@gmail.com',
      profilePicture: '',
      walletAddress: '',
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
    if (this.User.profilePicture != null) {
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

      this.imageService.uploadImage(uploadImageData).subscribe(() => { });
    }
  }

  deletePreviewImage() {
    this.imagePreviewUrl = null;
  }
}
