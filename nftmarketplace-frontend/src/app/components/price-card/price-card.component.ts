import { Component, Input } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons';
import { Cart } from 'src/app/models/cart';
import { NFT } from 'src/app/models/nft';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {

  Cart: Cart = {
    itemPrice: 0,
    nftName: '',
    walletAddress: ''
  }

  // Icons
  faClock = faClock;
  faShoppingCart = faShoppingCart;
  faTag = faTag;

  @Input()
  nft!: NFT;

  @Input()
  user!: User;

  constructor(private cartService: CartService) { }

  ngOnInt() {
  }

  addToCart(item: any) {
    console.log(item);
    this.Cart = {
      itemPrice: item.price,
      nftName: item.name,
      walletAddress: this.user.walletAddress
    }
    this.cartService.persistCart(this.Cart).subscribe(() => {
      
    console.log('this.Cart');
    });
  }

  resetCart() {
    this.Cart = {
      itemPrice: 0,
      nftName: '',
      walletAddress: ''
    }
  }
}
