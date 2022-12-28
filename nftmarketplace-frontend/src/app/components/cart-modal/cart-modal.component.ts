import { Component } from '@angular/core';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent {
  faXmark = faXmark;
  faTrash = faTrash;
}
