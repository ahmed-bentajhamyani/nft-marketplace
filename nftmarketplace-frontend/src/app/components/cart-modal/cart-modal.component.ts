import { Component, Input } from '@angular/core';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NftService } from 'src/app/services/nft.service';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {

  @Input() user!: User;

  @Input() carts: any;

  @Input() nfts: any;

  retrieveResponse: any;
  base64Data: any;
  @Input() retrievedImages: any;

  @Input() totalItems: any;

  @Input() totalPrice: any;

  // Icons
  faXmark = faXmark;
  faTrash = faTrash;

  constructor(private nftService: NftService, private cartService: CartService, private imageService: ImageService) { }

  getUserCarts() {
    this.cartService.getUserCarts(this.user.walletAddress).subscribe(response => {
      this.carts = response;
      for (let cart of this.carts) {
        this.totalPrice += cart.itemPrice;
        this.totalItems += 1;
        this.getNftInCart(cart);
      }
    })
  }

  getNftInCart(cart: any) {
    this.nftService.getNftByName(cart.nftName).subscribe(response => {
      this.nfts[cart.id] = response;
      this.getImage(this.nfts[cart.id]);
    })
  }

  getImage(nft: any) {
    this.imageService.getImage(nft.imageName).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedImages[nft.name] = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  removeItemFromCart(cart: any) {
    this.cartService.removeItemFromCart(cart.id).subscribe(() => {
      this.totalPrice -= cart.itemPrice;
      this.totalItems -= 1;
      this.getUserCarts();
    });
  }

  clearCart() {
    this.cartService.clearCart(this.user.walletAddress).subscribe(() => {
      this.totalPrice = 0;
      this.totalItems = 0;
      this.getUserCarts();
    });
  }
}
