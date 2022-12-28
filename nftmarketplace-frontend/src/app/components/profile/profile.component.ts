import { Component } from '@angular/core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faFlag, faGear, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  collections: any;

  // Icons
  faShareNodes = faShareNodes;
  faEllipsis = faEllipsis;
  faEthereum = faEthereum;
  faGear = faGear;
  faFlag = faFlag;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections() {
    this.collectionService.getCollections().subscribe(reponse => {
      this.collections = reponse;
      for (let collection of this.collections) {
        collection.created_at = new Date(collection.created_at).toISOString().slice(0, 16).replace('T', ' ');
      }
    })
  }

  truncate (fullStr: string, strLen: number, separator: any) {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow/2),
        backChars = Math.floor(charsToShow/2);

    return fullStr.substr(0, frontChars) + 
           separator + 
           fullStr.substr(fullStr.length - backChars);
};
}
