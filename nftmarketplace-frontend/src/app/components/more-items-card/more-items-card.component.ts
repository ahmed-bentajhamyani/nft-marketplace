import { Component } from '@angular/core';
import { faGrip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-more-items-card',
  templateUrl: './more-items-card.component.html',
  styleUrls: ['./more-items-card.component.css']
})
export class MoreItemsCardComponent {
  faGrip = faGrip;
}
