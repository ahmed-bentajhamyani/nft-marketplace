import { Component, Input } from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-item-description-card',
  templateUrl: './item-description-card.component.html',
  styleUrls: ['./item-description-card.component.css']
})
export class ItemDescriptionCardComponent {
  faBarsStaggered = faBarsStaggered;

  @Input()
  collection!: Collection;

  @Input()
  owner!: User;
  
}
