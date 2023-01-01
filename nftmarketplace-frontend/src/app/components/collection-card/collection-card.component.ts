import { Component, Input } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Collection } from 'src/app/models/collection';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent {
  @Input()
  collection!: Collection;

  @Input()
  retrievedImage: any;

  // Icons
  faImage = faImage;

  constructor() { }
}
