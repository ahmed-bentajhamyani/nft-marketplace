import { Component, Input } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons';
import { NFT } from 'src/app/models/nft';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  faClock = faClock;
  faShoppingCart = faShoppingCart;
  faTag = faTag;

  @Input()
  nft!: NFT;

  constructor(private cartService: CartService) { }
}
