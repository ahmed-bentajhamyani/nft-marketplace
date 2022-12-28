import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent {
  faClock = faClock;
  faShoppingCart = faShoppingCart;
  faTag = faTag;
}
