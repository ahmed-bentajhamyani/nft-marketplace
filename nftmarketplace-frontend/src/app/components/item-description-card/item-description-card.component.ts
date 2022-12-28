import { Component } from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-description-card',
  templateUrl: './item-description-card.component.html',
  styleUrls: ['./item-description-card.component.css']
})
export class ItemDescriptionCardComponent {
  faBarsStaggered = faBarsStaggered;
}
