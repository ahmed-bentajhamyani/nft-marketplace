import { Component, Input } from '@angular/core';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NftService } from 'src/app/services/nft.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  @Input() isActive: any;

  // Icons
  faXmark = faXmark;
  faTrash = faTrash;

  constructor(private nftService: NftService, private cartService: CartService) {}

  clearCart() {
    
  }
}
