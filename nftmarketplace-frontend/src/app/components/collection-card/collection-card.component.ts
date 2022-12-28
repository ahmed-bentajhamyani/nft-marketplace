import { Component, Input } from '@angular/core';
import { Collection } from 'src/app/models/collection';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent {
  @Input()
  collection!: Collection;

  constructor() { }
}
