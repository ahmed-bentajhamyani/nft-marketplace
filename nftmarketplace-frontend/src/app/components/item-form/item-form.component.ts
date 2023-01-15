import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faClose, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CollectionService } from 'src/app/services/collection.service';
import { ImageService } from 'src/app/services/image.service';
import { NftService } from 'src/app/services/nft.service';
import abiInterface from '../../../../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

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
    imageName: '',
    token: ''
  }

  selectedFile: any;
  imagePreviewUrl: any;

  // Icons
  faCloudArrowUp = faCloudArrowUp;
  faClose = faClose;

  constructor(private collectionService: CollectionService, private nftService: NftService, private imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections() {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
    })
  }

  persistNft = async () => {
    const ethers = require("ethers");
    const adress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const mycontract = new ethers.Contract(adress, abiInterface.abi, signer);
    const v2 = await mycontract.addItem(await signer.getAddress())
    await v2.wait();
    const v = await mycontract.getId();
    this.Nft.token = v._hex;
    console.log('hey')
    this.nftService.persistNft(this.Nft).subscribe(() => {
      console.log(this.Nft)
      this.onUpload();
    });
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
