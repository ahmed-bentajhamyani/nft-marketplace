import { Component } from '@angular/core';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent {
  // Icons
  faCloudArrowUp = faCloudArrowUp;
}
